import Form from '../../ui/Form';
import FormRow from '../cabins/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';

function UpdateSettingsForm() {
  const {isLoading,settings}=useSettings()
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice
  }=settings;
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' disabled={isLoading} id='min-nights' value={minBookingLength}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number'  disabled={isLoading}id='max-nights'  value={maxBookingLength}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' disabled={isLoading} id='max-guests'  value={maxGuestsPerBooking}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' disabled={isLoading} id='breakfast-price' value={breakfastPrice} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
