import Link from 'next/link';
import { styled } from '@mui/material';
import Image from 'next/image';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
  marginTop: 20,
}));

const whiteLogoImageUrl = process.env.NEXT_PUBLIC_HEADER_LOGO;

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image
        src={`/${whiteLogoImageUrl}`}
        alt="logo"
        height={70}
        width={174}
        priority
      />
    </LinkStyled>
  );
};

export default Logo;
