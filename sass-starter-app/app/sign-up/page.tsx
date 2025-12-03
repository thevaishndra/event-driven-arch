import React, { useState } from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

const Signup = () => {
    const {isLoaded, signUp, setActive} = useSignUp();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState('');

    const router = useRouter();

  if(!isLoaded) {
    return null; //if have a loader keep spinning that loader
  }

  //make sure everything is async and db is another continent
  //and write try catch to manage error
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded) {
        return;
    }
  }
}

export default Signup