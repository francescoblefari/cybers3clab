import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Platform } from '@/app/studiare/platforms';
import Link from "next/link";

interface PlatformAccessCardProps {
  className?: string;
  platform: Platform;
}

export function PlatformAccessCard({ className, platform, ...props}: PlatformAccessCardProps) {

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{platform.name}</CardTitle>
        <CardDescription>{platform.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={platform.link} className="w-full">
          <Button className="w-full">
            Entra
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
