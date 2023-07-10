const mapping: Record<string, string> = {
  attendances: 'attendance',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
