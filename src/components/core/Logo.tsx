import Image from 'next/image';

type LogoProps = {
    size?: number;
};

const Logo = ({ size = 40 }: LogoProps) => (
    <Image
        src="/logo.svg"
        width={size}
        height={size}
        title="Pedido expresso - gestão de pedidos e estoque"
        alt="Pedido expresso - gestão de pedidos e estoque"
    />
);

export { Logo };
