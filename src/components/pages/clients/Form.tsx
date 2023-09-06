'use client';

import { FormField } from "@/components/shared/FormField";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = useCallback(async () => {}, []);

  return (
    <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Razão social" {...register("name")} autoFocus />
      <FormField label="CNPJ" {...register("cnpj")} />
    </form>
  );
};

export { Form };
