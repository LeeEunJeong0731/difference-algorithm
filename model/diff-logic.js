/**
 * ? Q. JSON 파일을 아래의 5, 6번에 해당하는 로직 작성 후 JSON으로 저장
 * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
 *
 * * 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
 * * 2. inputJSONdata, outputJSONdata의 value를 비교
 * * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
 * * 4. dirrences.json 파일에 필요한 상태값
 * * 5. 같은 단어가 무엇인지 저장
 * * 6. 다른 단어가 무엇인지 저장
 * * 7. 리턴을 통해 결과값을 전달
 */

/**
 *
 * @param {JSON, Path} inputJSONdata
 * @param {JSON, Path} outputJSONdata
 * @returns Object
 */

import fs from 'fs';

export default function (inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    throw new Error(
      `매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`
    );
  }

  // 1. JSON 파일을 읽어서 JSON 객체로 변환
  const inputJSONData = JSON.parse(fs.readFileSync(inputJSONPath, 'utf8'));
  const outputJSONData = JSON.parse(fs.readFileSync(outputJSONPath, 'utf8'));

  // 2. inputJSONData와 outputJSONData의 value를 비교
  const inputValues = Object.values(inputJSONData);
  const outputValues = Object.values(outputJSONData);

  // 이후의 로직을 구현하기 위해 변수를 초기화합니다.
  // * 초기화를 하지 않아도 진행은 가능 하지만 초기화를 통해 변수를 명시적으로 설정하는 것은 코드의 가독성을 높이고 논리적인 오류를 방지 할 수 있고 다른 개발자가 보았을 때 가독성이 올라간다.

  let result = {
    sameWords: [],
    differenceWords: [],
  };

  // 3. outputJSONPath 매개변수의 key에 해당하는 정보를 저장
  const keysToStore = Object.keys(inputJSONData); // inputJSONData의 모든 키를 가져옵니다.
  //* json의 output은 differences.json의 "operator"와 "operand"이 해당된다.

  keysToStore.forEach((key) => {
    // outputJSONData 객체에 해당 키와 값을 저장합니다.
    outputJSONData[key] = inputJSONData[key];
  });
  return result;
}
