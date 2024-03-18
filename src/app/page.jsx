"use client";
import simbol from "../../public/simbolo.png";
import LoginForm from "@/components/forms/login";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="flex gap-3 justify-center">
          <Image height={150} alt="imagen diabetes" src={simbol} />
        </CardHeader>
        <CardBody>
          <LoginForm />
        </CardBody>
        <CardFooter>
          <Link className="m-auto cursor-pointer" underline="hover">
            ¿Has olvidado la contraseña?
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
