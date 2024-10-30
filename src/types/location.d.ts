export type Location = {
  code: string;
  name: string;
  city: { code: string; name: string };
  country: { code: string; name: string };
  multi: boolean;
  port: { code: string; name: string };
  region: { code: string; name: string };
  domestic: boolean;
  hideInBooker: boolean;
  starAwardTicket: boolean;
  ports: string[];
  type: string;
  distance: number | null;
};

export type ReturnLocation = {
  value: string;
  label: string;
  title: string;
  code: string;
};
