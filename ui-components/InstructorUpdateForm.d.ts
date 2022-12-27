/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Instructor } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InstructorUpdateFormInputValues = {
    name?: string;
    image?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
};
export declare type InstructorUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    facebook?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructorUpdateFormOverridesProps = {
    InstructorUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
    twitter?: FormProps<TextFieldProps>;
    instagram?: FormProps<TextFieldProps>;
    facebook?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructorUpdateFormProps = React.PropsWithChildren<{
    overrides?: InstructorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    instructor?: Instructor;
    onSubmit?: (fields: InstructorUpdateFormInputValues) => InstructorUpdateFormInputValues;
    onSuccess?: (fields: InstructorUpdateFormInputValues) => void;
    onError?: (fields: InstructorUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: InstructorUpdateFormInputValues) => InstructorUpdateFormInputValues;
    onValidate?: InstructorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InstructorUpdateForm(props: InstructorUpdateFormProps): React.ReactElement;
