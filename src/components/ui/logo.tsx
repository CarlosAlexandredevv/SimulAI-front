import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={200}
      height={200}
      quality={100}
      className="size-24 object-cover"
      priority
    />
  );
}
