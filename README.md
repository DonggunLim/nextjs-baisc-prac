# Next.js 기본 학습 정리

이 문서는 Next.js의 기본 개념을 학습하고 실습한 내용을 정리한 것으로, GitLab CI/CD와 Docker를 활용하여 AWS EC2에 배포한 프로젝트입니다.

---

## 📌 Layout and Templates

### ✅ 기본 개념 및 실습 목록

- [x] **기본 레이아웃 구조 (`layout.tsx`, `page.tsx`)**
- [x] **`Link` 태그 활용 (클라이언트 사이드 네비게이션)**
- [x] **(Q) 네비게이터 컴포넌트를 만들어 Layout에 렌더링**
- [x] **404 페이지 (`not-found.tsx`)**
- [x] **메타데이터 (`Metadata`) 설정**
- [x] **Dynamic Route (슬러그 표현, 페이지 파라미터, `params`)**
- [x] **(Q) `userId` 파라미터 기준으로 `jsonplaceholder` API 호출하여 화면에 표시**
- [x] **(Q) Dynamic Injection Metadata (동적 메타데이터 삽입)**
- [x] **로딩 페이지 (`loading.tsx`)**
- [x] **(Q) 부모와 자식 컴포넌트에 `loading.tsx`가 있을 때 어떤 것이 적용되는가?**
- [x] **에러 페이지 (`error.tsx`)**
- [x] **에러 핸들링 (Error Boundary, `useError` 등)**
- [x] **미들웨어 (`Middleware.ts`)**
- [x] **병렬 라우팅 (`Parallel Routes`)**
- [x] **라우트 핸들러 (`Route Handlers`)**
- [x] **(Q) `Middleware` + `Parallel Routes` + `Route Handler`를 함께 실습**
- [x] **캐시 재검증 (`Revalidate Cache`) + 서버 액션 (`Server Actions`)**

---

## 프로젝트 구조

![Project Structure](/public/next-runngin-diagram.png)
