import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

interface Car {
  id: number;
  name: string;
  age: string;
  vlMax: string;
  noteEco: string;
  noteUser: string;
  image?: string;
}

type CarsInput = Omit<Car, 'id'>;

interface CarsProviderProps {
  children: ReactNode;
}

interface CarsContextData {
  cars: Car[];
  createCars: (car: CarsInput) => Promise<void>;
}

export const CarsContext = createContext<CarsContextData>(
  {} as CarsContextData
);

export function CarsProvider({ children }: CarsProviderProps) {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    api.get('/cars').then(response => setCars(response.data.cars));
  }, []);

  async function createCars(data: CarsInput) {
    const response = await api.post('/cars', {
      ...data,
    });
    const newCars = response.data.cars;
    setCars([...cars, newCars]);
  }

  return (
    <CarsContext.Provider value={{ cars, createCars }}>
      {children}
    </CarsContext.Provider>
  );
}

export function useCars() {
  const context = useContext(CarsContext);
  return context;
}
