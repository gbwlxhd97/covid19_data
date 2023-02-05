import CMChart from '@src/components/CMChart';
import CMSelect from '@src/components/CMSelect';
import {
  IgenAgeCaseInf,
  IgenAgeCaseResponse,
  IinfState,
} from '@src/interfaces/covid19';
import covid19ApiList from '@src/services/covid19';
import { dateFormat } from '@src/utils/date';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
  const { getInfState, getGenAge } = covid19ApiList;
  const [infData, setInfData] = useState<IinfState>();
  const [genderData, setGenderData] = useState<any>({});
  const [selectDate, setSelectDate] = useState(20211101);
  const [ageData, setAgeData] = useState<Array<Array<any>>>();
  const [ageGubunSum, setAgeGubunSum] = useState<Array<any>>([]);
  const [ageGubunDuplicate, setAgeGubunDuplicate] = useState<Array<string>>([])
  const initFetch = async () => {
    const infData = await getInfState();
    setInfData(infData);
    const genAgeRes: IgenAgeCaseInf = await getGenAge();
    const genderDataList: Array<IgenAgeCaseResponse> = [
      ...genAgeRes?.items.item
        .filter((gender) => gender.gubun === '남성' || gender.gubun === '여성')
        .reverse(),
    ];
    let obj: any = {};
    genderDataList.forEach((item) => {
      obj[item.stateDt] = genderDataList
        .filter((e) => e.stateDt === item.stateDt)
        .map((item) => Number(item.confCase));
    });
    setGenderData(obj);
    const ageDataList = [
      ...genAgeRes.items.item.filter(
        (age) => age.gubun !== '남성' && age.gubun !== '여성'
      ),
    ];
    const duplicateKeyList = Array.from(
      new Set(ageDataList.map((e) => e.gubun))
    );
    setAgeGubunDuplicate(duplicateKeyList);
    const sameDateList = duplicateKeyList.map((item) =>
      ageDataList.filter((e) => e.gubun === item)
    );
    setAgeData(sameDateList);
    const sum = ageDataList.map((item) =>
    ageDataList.filter((e) => e.gubun === item.gubun).map((e) => e.confCase)
    );
    
    setAgeGubunSum(sum);
  };

  const infSeries: Array<any> = [
    {
      name: '확진자 수',
      data: infData?.items.item.map((e) => e.decideCnt).reverse(),
    },
  ];
  const infOptions = {
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

  const genderOption = {
    labels: [`남성`, `여성`],
    colors: ['#629ACD', '#E79997'],
  };
  const genderSeries: Array<any> = genderData?.[selectDate];

  const ageOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: Object.keys(genderData)
        .map((date) => dateFormat(date))
        .reverse(),
    },
  };

  const ageSeries: any = ageData?.map((item, i) => {
    let name = ageGubunDuplicate[i];
    let data = ageGubunSum[i];
    return { name, data };
  });
  useEffect(() => {
    initFetch();
  }, []);

  if (genderSeries)
    return (
      <>
        <Title>코로나 일자별 확진자 수</Title>
        <Line />
        <CMChart
          size={{ width: 850, height: 350 }}
          type={'line'}
          series={infSeries}
          options={infOptions}
        />
        <Flex>
          <Line isGenAgeTitle={true}>
            <Title isGenAgeTitle={true}>일자별 연령대 확진자 수</Title>
            <CMChart
              size={{ width: 660, height: 250 }}
              type={'bar'}
              series={ageSeries}
              options={ageOptions}
            />
          </Line>
          <Line isGenAgeTitle={true}>
            <Title isGenAgeTitle={true}>일자별 성별 확진자 수</Title>
            <SelectPos>
              <CMSelect
                optionDatas={Object.keys(genderData)}
                setFunction={setSelectDate}
                selectDate={String(selectDate)}
              />
            </SelectPos>
            <CMChart
              size={{ width: 360, height: 250 }}
              type={'donut'}
              series={genderSeries}
              options={genderOption}
            />
          </Line>
        </Flex>
      </>
    );
}

const Flex = styled.div`
  display: flex;
`;

const Title = styled.h3<{ isGenAgeTitle?: boolean }>`
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 700;
  margin: 14px 0 10px 12px;
  border-bottom: ${({ isGenAgeTitle }) =>
    isGenAgeTitle ? '1px solid rgba(204, 204, 204, 0.5)' : 0};
  padding-bottom: ${({ isGenAgeTitle }) => (isGenAgeTitle ? '20px' : 0)};
`;

const Line = styled.div<{ isGenAgeTitle?: boolean }>`
  flex: 1;
  border: 1px solid rgba(204, 204, 204, 0.5);
  margin-right: ${({ isGenAgeTitle }) => (isGenAgeTitle ? '-1px' : 0)};
  position: relative;
`;

const SelectPos = styled.div`
  position: absolute;
  top: 60px;
  right: 40px;
`;
