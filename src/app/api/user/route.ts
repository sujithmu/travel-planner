import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "@/lib/db";
import { z } from 'zod';

// Define schema
const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters')
  })

export async function POST( req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = userSchema.parse(body);
        
        // check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        });
        if(existingUserByEmail) {
            return NextResponse.json({user: null, message: "User with this email already exists"}, { status: 409 })
        }

        //check if username already exists
        const existingUserByUsername = await db.user.findUnique({
            where: {username: username}
        });
        if(existingUserByUsername) {
            return NextResponse.json({user: null, message: "User with this username already exists"}, { status: 409 })
        }

        // create new user
        const hashedPassword = await hash(password, 15);
        const newUser = await db.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            }
        });

        const  { password: newUserPassword, ...rest} = newUser
        return NextResponse.json({user: rest, message: "User created successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!"}, {status: 500 })
    }
}