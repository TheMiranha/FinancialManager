import { RiDonutChartFill } from '@remixicon/react';

import { Card } from '@/components/ui/Card';
import { SignUpForm } from '@/components/screens/auth/sign-up-form';
import { getTranslations } from 'next-intl/server';

export default async function Page() {

    const t = await getTranslations('Auth-SignUp')

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <RiDonutChartFill
            className="mx-auto size-10 text-gray-900 dark:text-gray-50"
            aria-hidden={true}
          />
          <h3 className="mt-6 text-center text-lg font-bold text-gray-900 dark:text-gray-50">
            {t("Title")}
          </h3>
        </div>
        <Card className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <SignUpForm/>
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