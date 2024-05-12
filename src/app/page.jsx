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
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

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
          <Link
            onClick={() => push("/reset-password")}
            className="m-auto cursor-pointer"
            underline="hover"
          >
            ¿Has olvidado la contraseña?
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
