import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const UseQuery = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // 윈도우에 포커스가 되면 데이터를 다시 가져온는것.
        refetchOnMount: false,
        // 컴포넌트가 처음 생성될 때 데이터를 가져오는것.
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <div>hello world</div>
    </QueryClientProvider>
  );
};

export default UseQuery;

/*
    react-query 는 서버의 값을 클라이언트에 가져오거나, 캐싱,값 업데이트, 에러핸들링 등 비동기 과정을 더욱 편하게 하는데 사용된다. 

    사용하는 이유 :
    클라이언트 데이터와 서버의 데이터가 공존하는 경우가 있음.
    이렇게되면 이도저도 아닌 혼종의 데이터가 된다. 
    그러면 서버에는 데이터가 패치되었지만 클라이언트에서는 패치가 되지 않은 경우가 발생할 수 있음. 

    그래서 react-query를 사용해서 클라이언트 데이터를 분리함.

    장점 :
    1. 캐싱,
    2. get을 한 데이터에 대해 update를 하면 자동으로 get을 다시 수행한다.
    3. 데이터가 오래되면 다시 get
    4. 동일 데이터를 여러번 요청하면 한번만 요청한다. (옵션으로 중복요청도 가능)
    5. 무한 스크롤
    6. 비동기 과정을 선언적으로 관리할 수 있다. 
    7. react-hook과 사용구조가 비슷함.

    useQuery 사용하기.
    첫번째 인자는 유니크한 키값,
    -> 유니크 키는 string 과 배열 을 받는다. 
    두번째 인자는 promise 

    비동기적으로 작동한다. 
    -> 한 컴포넌트에 여러개의 useQuery가 있다면 두개의 useQuery 가 동시에 실행된다. 
    ( 여러개의 비동기 query 가 있다면 useQueries 를 사용하기를 권유한다. )
*/
