'use client';

import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client'


export default function Home() {
  const { user, error, isLoading } = useUser();


  return (
      <h1>{user ? user.name : 'dudlaj ga'}</h1>
  );
}
