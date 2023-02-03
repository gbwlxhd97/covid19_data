import { useRouter } from 'next/router';
import styled from 'styled-components'


export default function Home() {
  const router = useRouter()
  return (
    <Div>
      인덱스
    </Div>
  )
}
const Div = styled.div`
  color:red
`;
