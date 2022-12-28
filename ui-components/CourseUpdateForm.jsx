/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Course } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function CourseUpdateForm(props) {
  const {
    id,
    course,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    category: undefined,
    isFeatured: false,
    excerpt: undefined,
    price: undefined,
    trainingMethod: undefined,
    video: undefined,
    courseDetails: undefined,
    duration: undefined,
    LearningObjective: undefined,
    CourseRequirement: undefined,
    targetAudience: undefined,
    level: undefined,
    curriculum: undefined,
    name: undefined,
    image: undefined,
  };
  const [category, setCategory] = React.useState(initialValues.category);
  const [isFeatured, setIsFeatured] = React.useState(initialValues.isFeatured);
  const [excerpt, setExcerpt] = React.useState(initialValues.excerpt);
  const [price, setPrice] = React.useState(initialValues.price);
  const [trainingMethod, setTrainingMethod] = React.useState(
    initialValues.trainingMethod
  );
  const [video, setVideo] = React.useState(initialValues.video);
  const [courseDetails, setCourseDetails] = React.useState(
    initialValues.courseDetails
  );
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [LearningObjective, setLearningObjective] = React.useState(
    initialValues.LearningObjective
  );
  const [CourseRequirement, setCourseRequirement] = React.useState(
    initialValues.CourseRequirement
  );
  const [targetAudience, setTargetAudience] = React.useState(
    initialValues.targetAudience
  );
  const [level, setLevel] = React.useState(initialValues.level);
  const [curriculum, setCurriculum] = React.useState(initialValues.curriculum);
  const [name, setName] = React.useState(initialValues.name);
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...courseRecord };
    setCategory(cleanValues.category);
    setIsFeatured(cleanValues.isFeatured);
    setExcerpt(cleanValues.excerpt);
    setPrice(cleanValues.price);
    setTrainingMethod(cleanValues.trainingMethod);
    setVideo(cleanValues.video);
    setCourseDetails(cleanValues.courseDetails);
    setDuration(cleanValues.duration);
    setLearningObjective(cleanValues.LearningObjective);
    setCourseRequirement(cleanValues.CourseRequirement);
    setTargetAudience(cleanValues.targetAudience);
    setLevel(cleanValues.level);
    setCurriculum(cleanValues.curriculum);
    setName(cleanValues.name);
    setImage(cleanValues.image);
    setErrors({});
  };
  const [courseRecord, setCourseRecord] = React.useState(course);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Course, id) : course;
      setCourseRecord(record);
    };
    queryData();
  }, [id, course]);
  React.useEffect(resetStateValues, [courseRecord]);
  const validations = {
    category: [],
    isFeatured: [],
    excerpt: [],
    price: [],
    trainingMethod: [],
    video: [{ type: "URL" }],
    courseDetails: [],
    duration: [],
    LearningObjective: [],
    CourseRequirement: [],
    targetAudience: [],
    level: [],
    curriculum: [],
    name: [],
    image: [{ type: "URL" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          category,
          isFeatured,
          excerpt,
          price,
          trainingMethod,
          video: video || undefined,
          courseDetails,
          duration,
          LearningObjective,
          CourseRequirement,
          targetAudience,
          level,
          curriculum,
          name,
          image: image || undefined,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Course.copyOf(courseRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "CourseUpdateForm")}
    >
      <SelectField
        label="Category"
        placeholder="Please select an option"
        isDisabled={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category: value,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      >
        <option
          children="Data science"
          value="DATA_SCIENCE"
          {...getOverrideProps(overrides, "categoryoption0")}
        ></option>
        <option
          children="Graphics"
          value="GRAPHICS"
          {...getOverrideProps(overrides, "categoryoption1")}
        ></option>
        <option
          children="Microsoft office"
          value="MICROSOFT_OFFICE"
          {...getOverrideProps(overrides, "categoryoption2")}
        ></option>
        <option
          children="Programming"
          value="PROGRAMMING"
          {...getOverrideProps(overrides, "categoryoption3")}
        ></option>
        <option
          children="Security"
          value="SECURITY"
          {...getOverrideProps(overrides, "categoryoption4")}
        ></option>
        <option
          children="Project management"
          value="PROJECT_MANAGEMENT"
          {...getOverrideProps(overrides, "categoryoption5")}
        ></option>
        <option
          children="Cloud"
          value="CLOUD"
          {...getOverrideProps(overrides, "categoryoption6")}
        ></option>
        <option
          children="Servers"
          value="SERVERS"
          {...getOverrideProps(overrides, "categoryoption7")}
        ></option>
      </SelectField>
      <SwitchField
        label="Is featured"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isFeatured}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured: value,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.isFeatured ?? value;
          }
          if (errors.isFeatured?.hasError) {
            runValidationTasks("isFeatured", value);
          }
          setIsFeatured(value);
        }}
        onBlur={() => runValidationTasks("isFeatured", isFeatured)}
        errorMessage={errors.isFeatured?.errorMessage}
        hasError={errors.isFeatured?.hasError}
        {...getOverrideProps(overrides, "isFeatured")}
      ></SwitchField>
      <TextField
        label="Excerpt"
        isRequired={false}
        isReadOnly={false}
        defaultValue={excerpt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt: value,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.excerpt ?? value;
          }
          if (errors.excerpt?.hasError) {
            runValidationTasks("excerpt", value);
          }
          setExcerpt(value);
        }}
        onBlur={() => runValidationTasks("excerpt", excerpt)}
        errorMessage={errors.excerpt?.errorMessage}
        hasError={errors.excerpt?.hasError}
        {...getOverrideProps(overrides, "excerpt")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={price}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price: value,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <SelectField
        label="Training method"
        placeholder="Please select an option"
        isDisabled={false}
        value={trainingMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod: value,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.trainingMethod ?? value;
          }
          if (errors.trainingMethod?.hasError) {
            runValidationTasks("trainingMethod", value);
          }
          setTrainingMethod(value);
        }}
        onBlur={() => runValidationTasks("trainingMethod", trainingMethod)}
        errorMessage={errors.trainingMethod?.errorMessage}
        hasError={errors.trainingMethod?.hasError}
        {...getOverrideProps(overrides, "trainingMethod")}
      >
        <option
          children="Inperson"
          value="INPERSON"
          {...getOverrideProps(overrides, "trainingMethodoption0")}
        ></option>
        <option
          children="Online"
          value="ONLINE"
          {...getOverrideProps(overrides, "trainingMethodoption1")}
        ></option>
        <option
          children="Corportate"
          value="CORPORTATE"
          {...getOverrideProps(overrides, "trainingMethodoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Video"
        isRequired={false}
        isReadOnly={false}
        defaultValue={video}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video: value,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.video ?? value;
          }
          if (errors.video?.hasError) {
            runValidationTasks("video", value);
          }
          setVideo(value);
        }}
        onBlur={() => runValidationTasks("video", video)}
        errorMessage={errors.video?.errorMessage}
        hasError={errors.video?.hasError}
        {...getOverrideProps(overrides, "video")}
      ></TextField>
      <TextField
        label="Course details"
        isRequired={false}
        isReadOnly={false}
        defaultValue={courseDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails: value,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.courseDetails ?? value;
          }
          if (errors.courseDetails?.hasError) {
            runValidationTasks("courseDetails", value);
          }
          setCourseDetails(value);
        }}
        onBlur={() => runValidationTasks("courseDetails", courseDetails)}
        errorMessage={errors.courseDetails?.errorMessage}
        hasError={errors.courseDetails?.hasError}
        {...getOverrideProps(overrides, "courseDetails")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        defaultValue={duration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration: value,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <TextField
        label="Learning objective"
        isRequired={false}
        isReadOnly={false}
        defaultValue={LearningObjective}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective: value,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.LearningObjective ?? value;
          }
          if (errors.LearningObjective?.hasError) {
            runValidationTasks("LearningObjective", value);
          }
          setLearningObjective(value);
        }}
        onBlur={() =>
          runValidationTasks("LearningObjective", LearningObjective)
        }
        errorMessage={errors.LearningObjective?.errorMessage}
        hasError={errors.LearningObjective?.hasError}
        {...getOverrideProps(overrides, "LearningObjective")}
      ></TextField>
      <TextField
        label="Course requirement"
        isRequired={false}
        isReadOnly={false}
        defaultValue={CourseRequirement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement: value,
              targetAudience,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.CourseRequirement ?? value;
          }
          if (errors.CourseRequirement?.hasError) {
            runValidationTasks("CourseRequirement", value);
          }
          setCourseRequirement(value);
        }}
        onBlur={() =>
          runValidationTasks("CourseRequirement", CourseRequirement)
        }
        errorMessage={errors.CourseRequirement?.errorMessage}
        hasError={errors.CourseRequirement?.hasError}
        {...getOverrideProps(overrides, "CourseRequirement")}
      ></TextField>
      <TextField
        label="Target audience"
        isRequired={false}
        isReadOnly={false}
        defaultValue={targetAudience}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience: value,
              level,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.targetAudience ?? value;
          }
          if (errors.targetAudience?.hasError) {
            runValidationTasks("targetAudience", value);
          }
          setTargetAudience(value);
        }}
        onBlur={() => runValidationTasks("targetAudience", targetAudience)}
        errorMessage={errors.targetAudience?.errorMessage}
        hasError={errors.targetAudience?.hasError}
        {...getOverrideProps(overrides, "targetAudience")}
      ></TextField>
      <SelectField
        label="Level"
        placeholder="Please select an option"
        isDisabled={false}
        value={level}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level: value,
              curriculum,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      >
        <option
          children="Beginner"
          value="BEGINNER"
          {...getOverrideProps(overrides, "leveloption0")}
        ></option>
        <option
          children="Intermediate"
          value="INTERMEDIATE"
          {...getOverrideProps(overrides, "leveloption1")}
        ></option>
        <option
          children="Advance"
          value="ADVANCE"
          {...getOverrideProps(overrides, "leveloption2")}
        ></option>
      </SelectField>
      <TextField
        label="Curriculum"
        isRequired={false}
        isReadOnly={false}
        defaultValue={curriculum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum: value,
              name,
              image,
            };
            const result = onChange(modelFields);
            value = result?.curriculum ?? value;
          }
          if (errors.curriculum?.hasError) {
            runValidationTasks("curriculum", value);
          }
          setCurriculum(value);
        }}
        onBlur={() => runValidationTasks("curriculum", curriculum)}
        errorMessage={errors.curriculum?.errorMessage}
        hasError={errors.curriculum?.hasError}
        {...getOverrideProps(overrides, "curriculum")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name: value,
              image,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        defaultValue={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              isFeatured,
              excerpt,
              price,
              trainingMethod,
              video,
              courseDetails,
              duration,
              LearningObjective,
              CourseRequirement,
              targetAudience,
              level,
              curriculum,
              name,
              image: value,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
