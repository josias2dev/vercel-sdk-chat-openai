'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useChat } from 'ai/react'
import { ScrollArea } from './ui/scroll-area'
import { useEffect, useRef } from 'react'

export function Chat() {

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
        onResponse: (response) => {
        }
    })

    return (

        <Card className="w-[440px]">
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
                <ScrollArea className='h-[640px] w-full pr-4'>
                    {messages.map(message => {
                        return (
                            <div className='flex gap-3 text-slate-600 text-sm mb-4'>

                                {
                                    message.role == "user" && (
                                        <Avatar>
                                            <AvatarFallback>JR</AvatarFallback>
                                            <AvatarImage src='https://github.com/josias2dev.png'></AvatarImage>
                                        </Avatar>
                                    )
                                }

                                {
                                    message.role == 'assistant' && (
                                        <Avatar>
                                            <AvatarFallback>JR</AvatarFallback>
                                            <AvatarImage src='https://github.com/rocketseat.png'></AvatarImage>
                                        </Avatar>
                                    )
                                }

                                <p className='leading-relaxed'>
                                    {
                                        message.role == "user" && (
                                            <div className='font-bold text-slate-800'>Josias</div>
                                        )
                                    }

                                    {
                                        message.role == 'assistant' && (
                                            <div className='font-bold text-slate-800'>AI</div>
                                        )
                                    }
                                    <span>{message.content}</span>
                                </p>
                            </div>
                        )
                    })}
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form onSubmit={handleSubmit} className='flex w-full gap-2'>
                    <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
                    <Button type='submit'>Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}
