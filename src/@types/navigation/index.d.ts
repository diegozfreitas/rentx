declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Home: NavigationStackProp<string>;
    CarDetails: NavigationStackProp<string>;
    MyCars: NavigationStackProp<string>;
    Scheduling: NavigationStackProp<string>;
    SchedulingDetails: NavigationStackProp<string>;
    SchedulingComplete: NavigationStackProp<string>;
  }
}
