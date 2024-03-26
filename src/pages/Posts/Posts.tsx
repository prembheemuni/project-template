import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import usePostService from "./usePostService";
import { useForm, Controller, FieldErrors } from "react-hook-form";

interface ProductForm {
  productId: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  discount: number;
}

interface formFieldObject {
  name: any;
  placeholder: string;
  type: string;
  rules: any;
}

const formFields = [
  {
    name: "productId",
    placeholder: "Enter ProductId",
    type: "text",
    rules: {
      required: { value: true, message: "Please provide the value" },
      minLength: { value: 5, message: "Please provide more than 5 letters" },
    },
  },
  {
    name: "title",
    placeholder: "Enter Title",
    type: "text",
    rules: {
      required: { value: true, message: "Please provide the value" },
      minLength: { value: 5, message: "Please provide more than 5 letters" },
    },
  },
  {
    name: "description",
    placeholder: "Enter description ",
    type: "text",
    rules: {
      required: { value: true, message: "Please provide the value" },
      minLength: { value: 5, message: "Please provide more than 5 letters" },
    },
  },
  {
    name: "price",
    placeholder: "Enter Price ",
    type: "number",
    rules: {
      required: { value: true, message: "Please provide the value" },
      min: { value: 1, message: "Please provide more than 0" },
      max: { value: 1000, message: "Please provide less than 1000" },
    },
  },
  {
    name: "rating",
    placeholder: "Enter Rating ",
    type: "number",
    rules: {
      required: { value: true, message: "Please provide the value" },
      min: { value: 1, message: "Please provide more than 0" },
      max: { value: 10, message: "Please provide less than 10" },
    },
  },
  {
    name: "discount",
    placeholder: "Enter description ",
    type: "number",
    rules: {
      required: { value: true, message: "Please provide the value" },
      min: { value: 1, message: "Please provide more than 0" },
      max: { value: 100, message: "Please provide less than 100" },
    },
  },
];

const Posts = () => {
  const { useGetAllPosts, useCreatePost } = usePostService();
  const { data, isLoading }: any = useGetAllPosts();
  console.log(data, "as product data");
  const mutation = useCreatePost();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductForm>({
    defaultValues: {
      productId: "",
      title: "",
      description: "",
      price: 1,
      rating: 1,
      discount: 1,
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };
  console.log(errors, "as error");

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h2>Posts</h2>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            {data.data.products &&
              data.data.products.map((e: any, i: number) => (
                <div key={i}>
                  <h4>{e.title}</h4>
                </div>
              ))}
          </div>
        )}
      </div>
      <div>
        <h3>Create Post</h3>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {formFields.map((each: formFieldObject) => (
              <Controller
                control={control}
                name={each.name}
                rules={each.rules}
                render={({ field: { value, onChange } }) => {
                  return (
                    <Input
                      type={each.type}
                      value={value}
                      onChange={onChange}
                      placeholder={each.placeholder}
                      errormessage={
                        errors[each.name as keyof FieldErrors<ProductForm>]
                          ?.message ?? ""
                      }
                    />
                  );
                }}
              />
            ))}

            <Button showText="Submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Posts;
