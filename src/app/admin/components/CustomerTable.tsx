import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

type Customer = {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: "active" | "inactive";
};

const customers: Customer[] = [
    { id: 1, name: 'Ahmed Magdy', email: 'ahmed@example.com', phone: '+20 100 000 0001', status: 'active' },
    { id: 2, name: 'Sara Youssef', email: 'sara@example.com', phone: '+20 100 000 0002', status: 'inactive' },
    { id: 3, name: 'Mohamed Salah', email: 'salah@example.com', phone: '+20 100 000 0003', status: 'active' },
    { id: 4, name: 'Fatma Adel', email: 'fatma@example.com', phone: '+20 100 000 0004', status: 'inactive' },
    { id: 5, name: 'Omar Khaled', email: 'omar@example.com', phone: '+20 100 000 0005', status: 'active' },
    { id: 6, name: 'Mona Nasser', email: 'mona@example.com', phone: '+20 100 000 0006', status: 'inactive' },
    { id: 7, name: 'Karim Tarek', email: 'karim@example.com', phone: '+20 100 000 0007', status: 'active' },
    { id: 8, name: 'Yasmin Hany', email: 'yasmin@example.com', phone: '+20 100 000 0008', status: 'inactive' },
    { id: 9, name: 'Hassan Fathy', email: 'hassan@example.com', phone: '+20 100 000 0009', status: 'active' },
    { id: 10, name: 'Laila Samir', email: 'laila@example.com', phone: '+20 100 000 0010', status: 'inactive' },
    { id: 11, name: 'Tarek Mohamed', email: 'tarek@example.com', phone: '+20 100 000 0011', status: 'active' },
    { id: 12, name: 'Nour El-Din', email: 'nour@example.com', phone: '+20 100 000 0012', status: 'inactive' },
];

const CustomerTable = () => {
    return (
        <div className="">
            <h2 className="text-2xl font-semibold mb-4"> List</h2>
            <div className="rounded-md border w-full">
                <Table className="w-full overflow-hidden">
                    <TableHeader>
                        <TableRow className="bg-gray-200">
                            <TableHead className="w-[200px]">Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell className="font-medium">{customer.name}</TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>{customer.phone}</TableCell>
                                <TableCell>
                                    <Badge
                                        className={
                                            customer.status === "active"
                                                ? "bg-green-500 text-white hover:bg-green-600"
                                                : "bg-red-500 text-white hover:bg-red-600"
                                        }
                                    >
                                        {customer.status}
                                    </Badge>

                                </TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Button size="icon" variant="ghost">
                                        <Icon icon="mdi:eye-outline" className="w-5 h-5 text-blue-500" />
                                    </Button>
                                    <Button size="icon" variant="ghost">
                                        <Icon icon="mdi:pencil-outline" className="w-5 h-5 text-green-500" />
                                    </Button>
                                    <Button size="icon" variant="ghost">
                                        <Icon icon="mdi:trash-can-outline" className="w-5 h-5 text-red-500" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default CustomerTable;
