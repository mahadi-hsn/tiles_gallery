"use client";
import Image from "next/image";
import logo from "@/Assets/logo.png";
import { IoIosArrowBack, IoIosCheckmark } from "react-icons/io";
import Home_selection1 from "@/Assets/Registration-selection.png";
import Home_selection2 from "@/Assets/Home-selection 2.png";
import Home_selection4 from "@/Assets/Home-selection 4.png";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { FloppyDisk } from "@gravity-ui/icons";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const SignupPage = () => {
  const lists = [
    {
      id: 0,
      title: "Save your favourite tiles",
    },
    {
      id: 1,
      title: "Order free samples in one tap",
    },
    {
      id: 2,
      title: "Track every delivery",
    },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;
    const phone = e.target.phone.value;

    const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
    });
    console.log({data , error});
  };
  return (
    <div className="bg-[#F6EEE1] flex gap-40">
      <div className="bg-[#4F5C45] w-[1194px] p-9 space-y-20 ">
        <div className="flex items-center gap-3 text-white ">
          <Image src={logo} alt="logo" width={38} height={38}></Image>
          <h1 className="font-heading text-2xl font-semibold">Terra Atelier</h1>
        </div>
        <div className="text-white space-y-8">
          <h1 className="font-heading text-4xl font-semibold">
            Join the Terra <br />
            Atelier family.
          </h1>
          <ul className="space-y-2">
            {lists.map((list, ind) => (
              <li className="flex items-center gap-2 text-sm" key={ind}>
                <IoIosCheckmark />
                {list.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 items-end">
          <Image
            className="w-[120px]  rounded-t-full"
            src={Home_selection2}
            alt="banner image"
            width={140}
            height={500}
          ></Image>
          <Image
            className="w-[120px]  rounded-t-full"
            src={Home_selection1}
            alt="banner image"
            width={440}
            height={500}
          ></Image>
          <Image
            className="w-[120px] rounded-t-full"
            src={Home_selection4}
            alt="banner image"
            width={440}
            height={500}
          ></Image>
        </div>
      </div>
      <div className="p-8 w-full text-[#3A2A20] ">
        <div className="flex justify-end">
          <Link className="flex items-center gap-2 text-sm" href={"shopall"}>
            <IoIosArrowBack />
            <span>Back to shop</span>
          </Link>
        </div>
        <Form className="w-full max-w-96" onSubmit={onSubmit}>
          <Fieldset>
            <Fieldset.Legend className="font-heading text-4xl mb-3">
              Create your account
            </Fieldset.Legend>
            <Description>Update your profile information.</Description>
            <FieldGroup>
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }
                  return null;
                }}
              >
                <Label>Full name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
              </TextField>
              <TextField isRequired name="email" type="email">
                <Label>Email address</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>
              <TextField isRequired name="phone" type="number">
                <Label>Phone number</Label>
                <Input placeholder="01XXXXXXXXX" />
                <FieldError />
              </TextField>
              <TextField isRequired name="image" type="text">
                <Label>Profile Picture Link</Label>
                <Input placeholder="Your photo" />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Button
                className={"w-full bg-[#B5532F] hover:bg-[#994628]"}
                type="submit"
              >
                Create account
              </Button>
            </Fieldset.Actions>
          </Fieldset>
          <p className="text-center mt-5 text-sm">
            Already have an account?{" "}
            <Link
              className="font-bold underline text-[#B5532F]"
              href={"/signin"}
            >
              Log in
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
