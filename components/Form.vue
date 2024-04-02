<script setup lang="ts">
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushButton from '@nabux-crush/crush-button';

import { useRegistrationForm } from '@/composables/useForm';

const { 
  form, 
  rules, 
  inputKey, 
  formIsValid, 
  sendEmail 
} = useRegistrationForm();
</script>

<template>
  <form
    id="form" 
    class="form">
      <CrushTextField
        v-model="form.name"
        :required="true"
        :ValidRules="rules.validateName"
        :key="inputKey"
        :label="'Nombre'"
        placeholder="Jhon Doe" 
      />
      <CrushTextField
        v-model="form.email"
        :required="true"
        :ValidRules="rules.validateEmail"
        :key="inputKey"
        :label="'Email'"
        placeholder="jhon@ejemplo.com" 
      />
      <CrushButton 
        :small=true 
        :disabled="!formIsValid"
        text="Enviar" 
        variant="alert" 
        @click.prevent="sendEmail" 
      />  
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: $secondary-font;
  width: 100%;
  @media (min-width: $tablet-upper-breakpoint){
    width: 80%;
  }
}
:deep(.crush-text-field){
  width: 100%;
  
}
:deep(.crush-text-field .crush-text-field-label-text){
  color: $black;
}
:deep(.crush-text-field .input-container.active){
  border-color: $green-700;
}
:deep(.crush-text-field .input-container .crush-text-field-input){
  color: $black;
}
:deep(.crush-button.disabled){
  background-color: $green-700;
  width: 100%;
}
:deep(.crush-button-small){
  background-color: $green-700;
  width: 100%;
  color: #fff;
  border: none;  
}
</style>