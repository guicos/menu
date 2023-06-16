export interface MenuInterface {
    id: string;
    label: string;
    link: string;
    menuSupId: string | null;
};

export enum menuId {
   "register" = "register",
   "people" = "people"
}