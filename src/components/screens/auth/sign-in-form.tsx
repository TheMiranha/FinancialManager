'use client'

import { Button } from "@/components/ui/Button"
import { Divider } from "@/components/ui/Divider"
import { Input } from "@/components/ui/Input"
import { RiGithubFill, RiGoogleFill } from "@remixicon/react"
import { useTranslations } from "next-intl"
import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { useToast } from "@/lib/useToast"
import { Toaster } from "@/components/ui/Toaster"

export function SignInForm() {

    const t = useTranslations('Auth-SignIn')
    const router = useRouter();
    const {toast} = useToast()
    const [loading, setLoading] = useState<boolean>(false)

    const formSchema = useMemo(() => z.object({
        email: z.email({ error: t('InvalidEmail') }),
        password: z.string(),
    }), [t])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        if (loading) return
        setLoading(true)
        await authClient.signIn.email({
            email: data.email,
            password: data.password,
            fetchOptions: {
                onSuccess: () => {
                    router.push('/dashboard')
                },
                onError: () => {
                    toast({
                        title: t('Error'),
                        description: t('InvalidCredentials'),
                        variant: 'error'
                    })
                    
                }
            }
        })
        setLoading(false)
    }

    async function handleSocialLogin(provider: 'github' | 'google') {
        if (loading) return
        setLoading(true)
        await authClient.signIn.social({
            provider: provider,
            fetchOptions: {
                onSuccess: () => {
                    router.push('/dashboard')
                }
            },
            callbackURL: '/dashboard'
        })
    }

    return (
        <>
            <div className="mt-8 sm:flex sm:items-center sm:space-x-2">
                <Toaster/>
                <Button asChild variant="secondary" className="w-full" disabled={loading} onClick={() => handleSocialLogin('github')}>
                    <a href="#" className="inline-flex items-center gap-2">
                        <RiGithubFill className="size-5 shrink-0" aria-hidden={true} />
                        {t('GithubButton')}
                    </a>
                </Button>
                <Button asChild variant="secondary" className="mt-2 w-full sm:mt-0" disabled={loading} onClick={() => handleSocialLogin('google')}>
                    <a href="#" className="inline-flex items-center gap-2">
                        <RiGoogleFill className="size-4" aria-hidden={true} />
                        {t('GoogleButton')}
                    </a>
                </Button>
            </div>
            <Divider>{t('Or')}</Divider>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {t('Email')}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='johh@company.com'
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {t('Password')}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='********'
                                        type='password'
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="mt-4 w-full" disabled={loading}>
                        {t('SignInButton')}
                    </Button>
                </form>
            </Form>
        </>
    )
}