import { cookies } from "next/headers";

export async function getToken() {
const cookieStore = cookies();
const token = (await cookieStore).get('token')?.value;
return token;
}