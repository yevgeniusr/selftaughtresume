'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { helloAction } from '@/actions/hello-action';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import * as m from '@/paraglide/messages';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormSchema = z.infer<typeof formSchema>;

export const HeroForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });
  const { toast } = useToast();

  const onSubmit = async ({ email }: FormSchema) => {
    // In a real app, you would send this to your backend
    const { message } = await helloAction(email);

    toast({ 
      title: "Thanks for your interest!",
      description: "We'll notify you when early access is available." 
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 sm:flex-row">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder={m.input_placeholder()}
                  className={cn(
                    'w-full',
                    form.formState.errors.email && 'border-destructive'
                  )}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="whitespace-nowrap">
          {m.submit_form()}
        </Button>
      </form>
    </Form>
  );
};
