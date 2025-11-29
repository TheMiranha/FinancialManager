'use client';

import { RiDonutChartFill, RiGithubFill, RiGoogleFill } from '@remixicon/react';

import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { useTranslations } from 'next-intl';

export default function Example() {

    const t = useTranslations('Auth-SignIn');

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex items-center space-x-2.5">
            <RiDonutChartFill
              className="size-7 text-gray-900 dark:text-gray-50"
              aria-hidden={true}
            />
            <p className="font-medium text-gray-900 dark:text-gray-50">
              FinancialManager
            </p>
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-50">
            {t('Title')}
          </h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            {t('Alternative')}{' '}
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
            >
              {t('CreateAccount')}
            </a>
          </p>
          <div className="mt-8 sm:flex sm:items-center sm:space-x-2">
            <Button asChild variant="secondary" className="w-full">
              <a href="#" className="inline-flex items-center gap-2">
                <RiGithubFill className="size-5 shrink-0" aria-hidden={true} />
                {t('GithubButton')}
              </a>
            </Button>
            <Button asChild variant="secondary" className="mt-2 w-full sm:mt-0">
              <a href="#" className="inline-flex items-center gap-2">
                <RiGoogleFill className="size-4" aria-hidden={true} />
                {t('GoogleButton')}
              </a>
            </Button>
          </div>
          <Divider>{t('Or')}</Divider>
          <form action="#" method="post" className="mt-6 space-y-4">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 dark:text-gray-50"
              >
                {t('Email')}
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="john@company.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 dark:text-gray-50"
              >
                {t('Password')}
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                placeholder="Password"
                className="mt-2"
              />
            </div>
            <Button type="submit" className="mt-4 w-full">
              {t('SignInButton')}
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            {t('PasswordResetText')}{' '}
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
            >
              {t('PasswordResetLink')}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}