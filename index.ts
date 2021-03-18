import caps from "./src/func/index";
export default caps as {
  def(str: string): string;
  keep(str: string): string;
  all(str: string): string;
  array(str: string[]): string[];
  sent(str: string): string;
  dash(str: string): string;
  reg(str: string): string;
  perms(str: string[]): string[];
};
