#!/usr/bin/bash
#tmux new-session \; split-window -h \;  split-window -v \; select-pane -t 0 \; split-window -v -p 66 \; split-window -v \;
tmux new-session \; splitw -h  \; splitw -v\; splitw -v \; splitw -v \;attach
