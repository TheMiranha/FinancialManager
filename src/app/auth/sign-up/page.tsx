'use client';

import { RiDonutChartFill } from '@remixicon/react';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { useTranslations } from 'use-intl';

export default function Example() {

    const t = useTranslations('Auth-SignUp')

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <RiDonutChartFill
            className="mx-auto size-10 text-gray-900 dark:text-gray-50"
            aria-hidden={true}
          />
          <h3 className="mt-6 text-center text-lg font-bold text-gray-900 dark:text-gray-50">
            {t('Title')}
          </h3>
        </div>
        <Card className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form action="#" method="post" className="space-y-4">
            <div>
              <Label htmlFor="name" className="font-medium">
                {t('Name')}
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder={t('Name')}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email" className="font-medium">
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
              <Label htmlFor="password" className="font-medium">
                {t('Password')}
              </Label>
              <Input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                placeholder={t('Password')}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="confirm-password" className="font-medium">
                {t('ConfirmPassword')}
              </Label>
              <Input
                type="password"
                id="confirm-password"
                name="confirm-password"
                autoComplete="confirm-password"
                placeholder={t('Password')}
                className="mt-2"
              />
            </div>
            <Button type="submit" className="mt-4 w-full">
              {t('SignUpButton')}
            </Button>
          </form>
        </Card>
        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-500">
          {t('Alternative')}{' '}
          <a
            href="#"
            className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
          >
            {t('SignIn')}
          </a>
        </p>
      </div>
    </>
  );
}