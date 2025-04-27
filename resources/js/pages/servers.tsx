import { Tacho } from '@/components/tacho';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { faUbuntu } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link } from '@inertiajs/react';
import { Plus, Power, RotateCcw } from 'lucide-react';
import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Servers',
        href: '/servers',
    },
];

export default function Servers() {
    const chartCpuUsageConfig = {
        desktop: {
            label: 'CPU Usage',
            color: 'var(--color-neutral-400)',
        },
    } satisfies ChartConfig;

    const chartCpuUsageData = Array.from({ length: 100 }, (_, index) => ({
        time: `${String(Math.floor(index / 60)).padStart(2, '0')}:${String(index % 60).padStart(2, '0')}`,
        cpu: Math.floor(Math.random() * 101),
    }));

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Servers" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-4 md:gap-4">
                    <div className="flex flex-col items-center">
                        <div className="flex h-full w-full items-center justify-center rounded-t-md border border-neutral-800 py-2">
                            <h4 className="text-lg leading-none font-bold">Servers</h4>
                        </div>
                        <ScrollArea className="h-[33.7666vh] w-full border border-neutral-500 md:h-[73.8666vh]">
                            <div className="w-full">
                                <Link href={'#'}>
                                    <div className="list-server active">
                                        <h1 className="title">Ubuntu_webdav</h1>
                                        <div className="flex w-full items-center justify-between">
                                            <p className="sub-title">174.112.125.114</p>
                                            <p className="sub-title">1 core, 12 GB</p>
                                        </div>
                                    </div>
                                </Link>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <React.Fragment key={index}>
                                        <Link href={'#'}>
                                            <div className="list-server">
                                                <h1 className="title">Support server {index + 1}</h1>
                                                <div className="flex w-full items-center justify-between">
                                                    <p className="sub-title">212.118.45.{75 + index}</p>
                                                    <p className="sub-title">1 core, 8 GB</p>
                                                </div>
                                            </div>
                                        </Link>
                                        {index !== Array.from({ length: 10 }).length && <Separator />}
                                    </React.Fragment>
                                ))}

                                <Link href={'#'}>
                                    <div className="list-server">
                                        <h1 className="title">Support server</h1>
                                        <div className="flex w-full items-center justify-between">
                                            <p className="sub-title">212.118.45.75</p>
                                            <p className="sub-title">1 core, 8 GB</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </ScrollArea>
                        <Button
                            asChild
                            variant={'success'}
                            size={'lg'}
                            className="mt-2 w-full py-2 font-bold shadow-sm shadow-neutral-500 transition-all duration-150 ease-in-out hover:-translate-y-0.5"
                        >
                            <Link href={'#'}>
                                <Plus /> Add Server
                            </Link>
                        </Button>
                    </div>
                    <div className="col-span-3 mt-3 space-y-2 md:mt-0">
                        <Separator className="block md:hidden" />
                        <div className="max-w-full bg-neutral-800 px-4 py-2 text-white md:max-w-fit">Overview</div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle>Info</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="w-[25%] font-bold">OS</TableCell>
                                                <TableCell className="w-[75%] font-bold">
                                                    <FontAwesomeIcon icon={faUbuntu} /> Ubuntu 22
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-bold">CPU</TableCell>
                                                <TableCell className="font-bold">1 core</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-bold">Memory</TableCell>
                                                <TableCell className="font-bold">12 GB</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-bold">Storage</TableCell>
                                                <TableCell className="font-bold">30 GB</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-bold">IP</TableCell>
                                                <TableCell className="font-bold">174.112.125.114</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>

                                    <div className="mt-4 flex gap-2">
                                        <Button variant={'success'}>
                                            <Power />
                                            <span className="text-sm">Start</span>
                                        </Button>
                                        <Button variant={'destructive'}>
                                            <Power />
                                            <span className="text-sm">Stop</span>
                                        </Button>
                                        <Button variant={'default'}>
                                            <RotateCcw />
                                            <span className="text-sm">Restart</span>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle>Uptime</CardTitle>
                                </CardHeader>
                                <CardContent className="flex h-full w-full items-center justify-center">
                                    <div className="flex size-50 items-center justify-center rounded-full border-4">
                                        <h1 className="text-4xl font-bold">01:01:01</h1>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle>Traffic Usage</CardTitle>
                                </CardHeader>
                                <CardContent className="flex h-full w-full items-center justify-center">
                                    <Tacho />
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle>CPU Usage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartCpuUsageConfig} className="max-h-[120px] w-full md:max-h-[100px]">
                                        <LineChart
                                            accessibilityLayer
                                            data={chartCpuUsageData}
                                            margin={{
                                                left: 12,
                                                right: 12,
                                            }}
                                        >
                                            <CartesianGrid vertical={true} horizontal={true} />
                                            <XAxis
                                                dataKey="time"
                                                tickLine={true}
                                                axisLine={false}
                                                tickMargin={10}
                                                tickFormatter={(value) => value}
                                                ticks={[
                                                    ...chartCpuUsageData
                                                        .filter((_, index) => index % Math.floor(chartCpuUsageData.length / 5) === 0)
                                                        .map((data) => data.time),
                                                    chartCpuUsageData[chartCpuUsageData.length - 1]?.time, // Ensure the last data point is included
                                                ]}
                                            />
                                            <YAxis
                                                domain={[0, 100]}
                                                axisLine={false}
                                                tickLine={false}
                                                ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                                                width={25}
                                                fontSize={12}
                                            />
                                            <Line dataKey="cpu" type="linear" stroke="var(--color-linechart)" strokeWidth={2} dot={false} />
                                        </LineChart>
                                    </ChartContainer>
                                </CardContent>
                            </Card>

                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle>RAM Usage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartCpuUsageConfig} className="max-h-[120px] w-full md:max-h-[100px]">
                                        <LineChart
                                            accessibilityLayer
                                            data={chartCpuUsageData}
                                            margin={{
                                                left: 12,
                                                right: 12,
                                            }}
                                        >
                                            <CartesianGrid vertical={true} horizontal={true} />
                                            <XAxis
                                                dataKey="time"
                                                tickLine={true}
                                                axisLine={false}
                                                tickMargin={10}
                                                tickFormatter={(value) => value}
                                                ticks={[
                                                    ...chartCpuUsageData
                                                        .filter((_, index) => index % Math.floor(chartCpuUsageData.length / 5) === 0)
                                                        .map((data) => data.time),
                                                    chartCpuUsageData[chartCpuUsageData.length - 1]?.time, // Ensure the last data point is included
                                                ]}
                                            />
                                            <YAxis
                                                domain={[0, 100]}
                                                axisLine={false}
                                                tickLine={false}
                                                ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                                                width={25}
                                                fontSize={12}
                                            />
                                            <Line dataKey="cpu" type="linear" stroke="var(--color-linechart)" strokeWidth={2} dot={false} />
                                        </LineChart>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
