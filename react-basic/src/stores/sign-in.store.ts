import { create } from 'zustand';

// zustand 상태관리 : 외부에서 상태를 관리

interface SignInStore{
     email: string;
     password: string;
     setEmail: (email: string) => void;
     setPassword: (password: string) => void;
}

const useStore = create<SignInStore>((set) => ({
     email: '',
     password: '',
     setEmail: (email) => set((state) => ({ ...state, email: email })),
     // setEmail: (email) => set((state) => ({ ...state, email })) email(상태변수) 과 email(속성값)이 같으면 : email 표기 안해도 가능
     // state -> {email, password, setEmail}
     // { ...state } -> { email, password, setEmail }
     // { ...state, email: email } -> { email: 'email (값)', password, setEmail }
     setPassword : (password) => set((state) => ({ ...state, password: password })),
}));

export default useStore;