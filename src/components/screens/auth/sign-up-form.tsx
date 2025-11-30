'use client'

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { useTranslations } from "next-intl"
import { useMemo } from "react"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export function SignUpForm() {

    const t = useTranslations('Auth-SignUp')

    const router = useRouter()
    
    const formSchema = useMemo(() => z.object({
        email: z.email({ error: t('InvalidEmail') }),
        password: z.string().min(8),
        confirmPassword: z.string(),
        name: z.string().min(3)
    }).refine(values => values.confirmPassword === values.password, {message: t('PasswordMismatch'), path: ['confirmPassword']}), [t])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            name: ""
        }
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            callbackURL: '/dashboard',
            fetchOptions: {
                onError: () => {
                    console.log('f')
                },
                onSuccess: () => {
                    router.push('/dashboard')
                }
            }
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {t('Name')}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='Chuck Norris'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                <FormField
                        control={form.control}
                        name='confirmPassword'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {t('ConfirmPassword')}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='********'
                                        type='password'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                <Button type="submit" className="mt-4 w-full">
                    {t('SignUpButton')}
                </Button>
            </form>
        </Form>
    )
}