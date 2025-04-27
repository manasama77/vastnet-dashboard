'use client';

import { Label, PolarAngleAxis, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

export function Tacho() {
    const used = 100; // dalam MB
    const limit = 1000; // 1 GB dalam MB
    const percent = (used / limit) * 100;

    const chartData = [
        {
            name: 'Usage',
            value: percent,
            fill: 'var(--success)',
        },
    ];

    return (
        <div className="relative h-[235px] w-[235px]">
            <RadialBarChart
                width={235}
                height={235}
                cx="50%"
                cy="50%"
                innerRadius="80%"
                outerRadius="110%"
                data={chartData}
                startAngle={90}
                endAngle={-270}
            >
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <RadialBar background dataKey="value" cornerRadius={10} />

                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                                return (
                                    <text x={viewBox.cx || 0} y={viewBox.cy || 0} textAnchor="middle" dominantBaseline="middle">
                                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 10} className="fill-foreground !-pt-10 text-3xl font-bold">
                                            {percent}%
                                        </tspan>
                                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 18} className="fill-foreground text-sm font-bold">
                                            {used} MB / <tspan className="fill-muted-foreground font-medium">{limit} MB</tspan>
                                        </tspan>
                                    </text>
                                );
                            }
                        }}
                    />
                </PolarRadiusAxis>
            </RadialBarChart>
        </div>
    );
}
