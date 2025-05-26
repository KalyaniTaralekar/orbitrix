export interface LaunchInfo {
  count: number;
  next: string | null;
  previous: string | null;
  results: LaunchData[];
}

export interface LaunchData {
  net: string;
  status: {
    name: string;
    };
    mission: {
        name: string;
        description: string;
    }
  rocket: {
    configuration: {
      full_name: string;
    };
  };
  image: string;
}
