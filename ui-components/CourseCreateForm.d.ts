/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourseCreateFormInputValues = {
    category?: string;
    isFeatured?: boolean;
    excerpt?: string;
    price?: number;
    trainingMethod?: string;
    video?: string;
    courseDetails?: string;
    duration?: string;
    LearningObjective?: string;
    CourseRequirement?: string;
    targetAudience?: string;
    level?: string;
    curriculum?: string;
    name?: string;
    image?: string;
};
export declare type CourseCreateFormValidationValues = {
    category?: ValidationFunction<string>;
    isFeatured?: ValidationFunction<boolean>;
    excerpt?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    trainingMethod?: ValidationFunction<string>;
    video?: ValidationFunction<string>;
    courseDetails?: ValidationFunction<string>;
    duration?: ValidationFunction<string>;
    LearningObjective?: ValidationFunction<string>;
    CourseRequirement?: ValidationFunction<string>;
    targetAudience?: ValidationFunction<string>;
    level?: ValidationFunction<string>;
    curriculum?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseCreateFormOverridesProps = {
    CourseCreateFormGrid?: FormProps<GridProps>;
    category?: FormProps<SelectFieldProps>;
    isFeatured?: FormProps<SwitchFieldProps>;
    excerpt?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    trainingMethod?: FormProps<SelectFieldProps>;
    video?: FormProps<TextFieldProps>;
    courseDetails?: FormProps<TextFieldProps>;
    duration?: FormProps<TextFieldProps>;
    LearningObjective?: FormProps<TextFieldProps>;
    CourseRequirement?: FormProps<TextFieldProps>;
    targetAudience?: FormProps<TextFieldProps>;
    level?: FormProps<SelectFieldProps>;
    curriculum?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CourseCreateFormProps = React.PropsWithChildren<{
    overrides?: CourseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CourseCreateFormInputValues) => CourseCreateFormInputValues;
    onSuccess?: (fields: CourseCreateFormInputValues) => void;
    onError?: (fields: CourseCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CourseCreateFormInputValues) => CourseCreateFormInputValues;
    onValidate?: CourseCreateFormValidationValues;
} & React.CSSProperties>;
export default function CourseCreateForm(props: CourseCreateFormProps): React.ReactElement;
