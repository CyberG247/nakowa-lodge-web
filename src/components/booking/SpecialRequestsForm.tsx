
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';

type SpecialRequestsFormProps = {
  form: UseFormReturn<any>;
};

const SpecialRequestsForm = ({ form }: SpecialRequestsFormProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="specialRequests"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Special Requests</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Any special requests or preferences?"
                className="min-h-[120px]"
              />
            </FormControl>
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Method</FormLabel>
            <FormControl>
              <select
                {...field}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <option value="on_arrival">Pay on Arrival</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="card_payment">Card Payment</option>
              </select>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default SpecialRequestsForm;
