import { RiDonutChartFill } from '@remixicon/react';

import { SignInForm } from '@/components/screens/auth/sign-in-form';
import { getTranslations } from 'next-intl/server';

export default async function Page() {

  const t = await getTranslations('Auth-SignIn')

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
          <SignInForm/>
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