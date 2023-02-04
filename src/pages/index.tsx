import CMChart from '@src/components/CMChart';
import { IinfState } from '@src/interfaces/covid19';
import covid19ApiList from '@src/services/covid19';
import { dateFormat } from '@src/utils/date';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
  const [infData, setInfData] = useState<IinfState>();
  const { getInfState } = covid19ApiList;

  const initFetch = async () => {
    setInfData(await getInfState());
  };

  useEffect(() => {
    initFetch();
  }, []);

  const series:Array<any> = [
    {
      name: '확진자 수',
      data: infData?.items.item.map((e) => e.decideCnt).reverse(),
    },
  ];
  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['rgba(231, 153, 151, 1)'],
    xaxis: {
      categories: infData?.items.item
        .map((e) => dateFormat(e.stateDt))
        .reverse(),
    },
  };
  return (
    <>
      <Title>코로나 일자별 확진자 수</Title>
      <Line />
      <CMChart
        size={{ width: 850, height: 350 }}
        type={'line'}
        series={series}
        options={options}
      />
    </>
  );
}

const Title = styled.h3<{isGenAgeTitle?:boolean}>`
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 700;
  margin: 14px 0 10px 12px;
  border-bottom: ${({isGenAgeTitle}) => isGenAgeTitle ? '1px solid rgba(204, 204, 204, 0.5)' : 0};
  padding-bottom: ${({isGenAgeTitle}) => isGenAgeTitle ? '20px' : 0};
`;

const Line = styled.div<{isGenAgeTitle?:boolean}>`
  flex: 1;
  border: 1px solid rgba(204, 204, 204, 0.5);
  margin-right: ${({isGenAgeTitle}) => isGenAgeTitle ? '-1px' : 0};
`;