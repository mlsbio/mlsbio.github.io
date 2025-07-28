from operator import methodcaller
from typing import Optional, List
from datetime import datetime, timedelta
from itertools import cycle
import csv


class Schedule:
    def __init__(self, path: str):
        self.start = datetime(
            year=2021,
            month=12,
            day=13,
            hour=8,
            minute=30,
        )
        self.currtime = self.start

        colors = cycle(["stage-saturn", "stage-earth"])
        self.blocks: List[List[str]] = []
        with open(path, encoding="utf-8-sig") as f:
            reader = csv.DictReader(map(methodcaller("strip"), f))
            for line in reader:
                if line["Title"].startswith("*"):
                    self.blocks.append([])
                else:
                    self.make_event(
                        line["Title"],
                        line["Description"],
                        int(line["Length"]),
                        color=next(colors),
                    )

    def get_schedule(self) -> str:
        data = '<div class="row">'
        for block in self.blocks:
            data += '<div class="col-md-6"><table class="schedule">'
            data += "".join(block)
            data += '</table></div>'
        data += '</row>'
        return data

    def make_event(
        self,
        title: str,
        description: Optional[str],
        length: int,
        color: str,
    ):
        unit = 5
        rowspan = length // unit
        first_block = (
            f'<tr><th>{self.currtime.strftime("%I:%M")}</th><td colspan="4" '
            f'rowspan={rowspan} class="{color}">{title}'
        )
        if description:
            first_block += f'<p style="font-weight:normal">{description}</p>'
        first_block += "</td></tr>"
        self.blocks[-1].append(first_block)
        self.currtime += timedelta(minutes=unit)
        for _ in range(1, rowspan):
            self.blocks[-1].append(
                f"<tr><th>{self.currtime.strftime('%I:%M')}</th></tr>"
            )
            self.currtime += timedelta(minutes=unit)


if __name__ == "__main__":
    s = Schedule("schedule.csv")
    text = s.get_schedule()
    print(text)
