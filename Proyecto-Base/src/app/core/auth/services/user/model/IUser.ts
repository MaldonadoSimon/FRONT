import {IBeneficiarie} from './IBeneficiarie';

export interface IUser {
  username: number;
  rut: number;
  dv: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fechaNacimiento: string;
  edad: number;
  telefono: number;
  genero: string;
  email: string;
  tipo: string;
  apodo: string;
  isapre: string;
  plan: string;
  beneficiarios: IBeneficiarie[];
  context: string;
}
