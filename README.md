# &#10000; 개요

이번에는 리덕스랑 링크 이용해서 Todo App과 Board App을 간단하게 구현해보기

# &#10004; 0512
* 프로젝트 생성<br />
* 프로젝트 디렉터리 나누기<br />

### 프로젝트 구조
```sh
├─src
│  ├─components/ # 화면 컴포넌트 모아둠
│  ├─containers/ # 컴포넌트를 뿌려주는 컨테이너 모아둠
│  ├─modules/ # 리듀서, 액션 함수 등
│  └─App.tsx
```
</br>

# &#10004; 0514
* 프로젝트 구조 나누기<br />
* 컴포넌트, 컨테이너를 큰 틀로 나눴음

### 컨테이너 구조
![컨테이너구조](https://user-images.githubusercontent.com/20867824/118292502-a90ade80-b513-11eb-86c2-33670506062b.png)

</br>

# &#10004; 0515
* Header Styling<br />

</br>

# &#10004; 0518
* TodoApp - TodoList의 item들 reducer로 저장 및 나열<br />

</br>

# &#10004; 0519
* TodoApp - TodoInput 컴포넌트 및 기능 구현<br />

</br>

# &#10004; 0520
* TodoApp - TodoToggle, TodoRemove 기능 구현<br />

</br>

# &#10004; 0522
* BoardApp - BoardList에 item들 렌더링<br />
* BoardApp - created_at은 하드코딩으로 string으로 넣어둠<br />
* 컴포넌트 디렉토리 구조 변경<br />

</br>

# &#10004; 0523
* BoardApp - BoardDetail(상세페이지) 만들기 완료<br />

</br>

# &#10004; 0524
* BoardApp - BoardInput(글작성) 완료<br />

</br>

# &#10004; 0525
* BoardApp - BoardModify(수정), BoardRemove(삭제) 완료<br />

</br>

# &#10004; 0526
* App - header, body 나누고 header는 일단 완료(나중에 더 좋은 디자인 생각나면 수정하기)<br />

</br>

# &#10004; 0529
* TodoApp - TodoList랑 TodoInput 부분 스타일링 적용<br />

### TodoList
![TodoList](https://user-images.githubusercontent.com/20867824/120082272-f20a8780-c0fc-11eb-93ce-fd741626efd0.png)