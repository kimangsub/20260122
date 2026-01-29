import MovieStar0 from '../assets/images/MovieStar0.jpg';
import MovieStar1 from '../assets/images/MovieStar1.jpg';
import MovieStar2 from '../assets/images/MovieStar2.jpg';
import MovieStar3 from '../assets/images/MovieStar3.jpg';
import MovieStar4 from '../assets/images/MovieStar4.jpg';
import MovieStar5 from '../assets/images/MovieStar5.jpg';
import MovieStar6 from '../assets/images/MovieStar6.jpg';
import MovieStar7 from '../assets/images/MovieStar7.jpg';
import MovieStar8 from '../assets/images/MovieStar8.jpg';
import MovieStar9 from '../assets/images/MovieStar9.jpg';
import MovieStar10 from '../assets/images/MovieStar10.jpg';
import MovieStar11 from '../assets/images/MovieStar11.jpg';
import MovieStar12 from '../assets/images/MovieStar12.jpg';
import MovieStar13 from '../assets/images/MovieStar13.jpg';
import MovieStar14 from '../assets/images/MovieStar14.jpg';
import MovieStar15 from '../assets/images/MovieStar15.jpg';
import MovieStar16 from '../assets/images/MovieStar16.jpg';
import MovieStar17 from '../assets/images/MovieStar17.jpg';
import MovieStar18 from '../assets/images/MovieStar18.jpg';
import MovieStar19 from '../assets/images/MovieStar19.jpg';
import MovieStar20 from '../assets/images/MovieStar20.jpg';
import MovieStar21 from '../assets/images/MovieStar21.jpg';
import MovieStar22 from '../assets/images/MovieStar22.jpg';
import TripBoard1 from '../assets/images/TripBoard1.png';
import TripBoard2 from '../assets/images/TripBoard2.png';


export const ProjectsData = [
    {
        id: 1,
        title: 'MovieStar',
        description: '팀 프로젝트',
        tech: ['React', 'Java', 'SpringBoot', 'MySQL', 'AWS'],
        period: '2025.12 - 2025.01',
        detail: {
            images: [
                MovieStar0,
                MovieStar1,
                MovieStar2,
                MovieStar3,
                MovieStar4,
                MovieStar5,
                MovieStar6,
                MovieStar7,
                MovieStar8,
                MovieStar9,
                MovieStar10,
                MovieStar11,
                MovieStar12,
                MovieStar13,
                MovieStar14,
                MovieStar15,
                MovieStar16,
                MovieStar17,
                MovieStar18,
                MovieStar19,
                MovieStar20,
                MovieStar21,
                MovieStar22,
            ],
            content:
                `MovieStar는 Open API를 활용하여 영화 정보를 제공하는 웹 애플리케이션입니다.
                사용자는 장르별 영화 목록을 조회하고, 영화의 상세 정보를 확인할 수 있습니다.

                [주요 기능]
                - 소셜 로그인을 포함한 회원 로그인 / 로그아웃 기능
                - TMDB Open API 연동을 통한 영화 데이터 조회 및 처리
                - 영화 장르별 목록 조회 및 장르 네비게이션 기능
                - 영화 상세 정보 페이지 제공
                - 영화 리뷰 작성 및 영화 좋아요 기능
                - AWS 배포 및 서버 운영

                [담당 역할]
                영화 메인 페이지(Home)에서 영화 데이터 초기 로딩, 장르 목록 조회, 장르별 영화 연동 로직을 구현하고,
                검색 기능과 장르 네비게이션 클릭 시 영화 리스트가 동적으로 갱신되도록 상태 관리 로직을 담당하였습니다.
                Axios 기반 API 모듈을 설계하여 영화 검색 및 카테고리별 조회 기능 등 데이터 연동 파트를 중심으로 개발에 참여하였습니다.
                네이버 로그인 등 소셜 로그인 기능 구현에 참여하여 로그인 상태에 따른 UI 분기 처리와 사용자 인증 흐름 일부를 프론트엔드에서 담당하였습니다.

                [느낀점]
                이번 프로젝트를 진행하면서 장르 네비게이션 바를 동적으로 불러오고, 장르 클릭 시 영화 리스트가 함께 바뀌도록 구현하는 과정이 특히 어려웠습니다.
                장르 목록과 장르별 영화 데이터를 각각 API로 받아와 상태로 관리하고 화면에 연결하는 흐름을 직접 구현하면서, 
                React에서 데이터 흐름과 상태 관리가 얼마나 중요한지 느끼게 되었습니다.
                팀 프로젝트를 진행하며 혼자 해결하기 어려운 문제를 팀원들과 공유하고 함께 고민하는 과정에서 협업과 소통의 중요성도 크게 느끼게 되었습니다.           
                `
        }
    },
    {
        id: 2,
        title: 'TripBoard',
        description: '개인 프로젝트',
        tech: ['React', 'JavaScript', 'CSS'],
        period: '2025.08 - 2025.09',
        detail: {
            images: [
                TripBoard1,
                TripBoard2
            ],
            content: 
                `TripBoard는 Open API를 활용하여 여행 정보를 제공하는 웹 애플리케이션입니다.
                사용자가 도시 이름을 검색하면 해당 도시의 날씨, 환율, 주요 관광지 정보와 사진, 여행 체크리스트를 한눈에 확인할 수 있는 웹 애플리케이션입니다.

                [주요 기능]
                - 도시 이름 검색 기반 여행 정보 조회
                - OpenWeather API를 활용한 실시간 날씨 정보 제공
                - 국가 코드 자동 인식 및 환율 정보 API 연동
                - OpenTripMap API를 활용한 주요 관광지 리스트 출력
                - Unsplash API를 이용한 관광지 이미지 자동 표시
                - 여행 체크리스트(메모) CRUD 기능 구현

                [구현 내용]
                도시 검색 기능을 구현하여 입력한 도시명을 기준으로 날씨, 환율, 관광지 데이터를 각각의 Open API에서 조회하고, 
                화면에 동적으로 갱신되도록 전체 데이터 흐름과 상태 관리를 담당하였습니다.
                OpenWeather, OpenTripMap, Unsplash API를 연동하여 도시별 날씨, 관광지 정보, 이미지 데이터를 비동기적으로 처리하였고,
                API 응답값을 가공하여 카드 UI 형태로 출력하는 로직을 구현했습니다.
                여행 체크리스트 기능을 직접 구현하여 사용자가 메모를 추가, 수정, 삭제할 수 있도록 CRUD 로직을 구성하였습니다.

                [느낀점]
                여러 Open API를 동시에 연동하면서 데이터 로딩 순서와 상태 관리가 꼬이는 문제가 자주 발생하여 해결하는 과정이 어려웠습니다.
                특히 도시 검색 한 번으로 여러 종류의 데이터를 함께 갱신하는 구조를 만들면서 컴포넌트 분리와 역할 정리가 얼마나 중요한지도 체감할 수 있었습니다.
                React에서 비동기 처리와 상태 흐름 설계의 중요성을 크게 느끼게 되었습니다.
                `
        }
    },
    {
        id: 3,
        title: 'Portfolio',
        description: '개인 프로젝트',
        tech: ['React', 'JavaScript', 'CSS', 'Vite'],
        period: '2025.12 - 2026.01',
        detail: {
            images: [

            ],
            content: 
                `Portfolio는 React 기반 SPA 구조로 제작한 개인 자기소개 및 프로젝트 소개용 웹 포트폴리오입니다.

                [주요 기능]
                - React + Vite 기반 SPA 구조로 포트폴리오 웹사이트 구축
                - 다크모드 / 라이트모드 테마 토글 기능 구현
                - 프로젝트 카드 및 상세 모달 뷰 구현
                - 기술 스택 및 자기소개 섹션 구성
                - 반응형 레이아웃 적용

                [구현 내용]
                React와 Vite 환경에서 개인 포트폴리오 SPA를 직접 설계하고, 전체 레이아웃 구성과 컴포넌트 분리를 통해 화면 구조를 구현하였습니다.
                다크모드 / 라이트 모드 상태를 전역으로 관리하여 모든 섹션에 일관된 테마가 적용되도록 처리하였습니다.
                또한 화면 크기에 따라 레이아웃이 자연스럽게 변하도록 반응형 스타일을 적용하였습니다.

                [느낀점]
                컴포넌트를 분리해 화면을 구성하면서, 구조를 어떻게 잡느냐에 따라 이후 수정이나 기능 추가가 얼마나 수월해지는지 체감할 수 있었습니다.
                단순히 화면을 구현하는 것을 넘어서, 전체 흐름을 고려해 설계하는 방식의 중요성을 배우는 계기가 되었습니다.
                기획부터 화면 구성, 기능 구현, 마무리까지 전 과정을 직접 진행하면서 프론트엔드 개발이 어떤 순서와 흐름으로 이루어지는지 정리할 수 있었습니다.
                `
        }
    },
]