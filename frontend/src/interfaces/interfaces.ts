export interface ButtonInterface {
  title: string;
  backgroundColor: string;
  textColor: string;
}

export interface SignUpFormInterface {
  names: string;
  lastnames: string;
  email: string;
  password: string;
}

export interface NotificationConfigInterface {
  [key: string]: {
    image: string;
    color: string;
  };
}
