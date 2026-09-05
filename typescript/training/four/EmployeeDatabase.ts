import type { Employee } from "./Employee"

export class EmployeeDatabase {

public getActiveEmployees(
  employees: Employee[]
): Employee[] {
    return employees.filter(employee => employee.active === true);
}

public getEmployeeNames(
  employees: Employee[]
): string[] {
    return employees.map(employee => employee.name);
}

public getHighEarners(
  employees: Employee[],
  minimumSalary: number
): Employee[] {
    return employees.filter(employee => employee.salary >= minimumSalary);
}

public findEmployee(
  employees: Employee[],
  name: string
): Employee | undefined {
    return employees.find(employee => employee.name === name);
}

public hasInactiveEmployee(
  employees: Employee[]
): boolean {
    return employees.some(employee => employee.active === false);
}

public getTotalSalary(
  employees: Employee[]
): number {
    let total = 0;
    for (const employee of employees) {
        total += employee.salary;
    }
    return total;
}
}