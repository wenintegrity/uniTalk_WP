<?php
/*
Template Name: Table template page
*/
?>
<?php get_header(); ?>

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs-3.3.7/jqc-1.12.3/dt-1.10.16/fc-3.2.4/fh-3.1.3/datatables.min.css"/>

<style>
    .dataTables_wrapper {
        margin-top: 20px;
        border-top: 1px solid #ccc;
        padding-top: 10px;
    }
    .dataTables_wrapper:first-child {
        border: none;
    }
</style>

    <ul class="nav nav-tabs">
        <li class=""><a href="#tab1" class="tab1" data-tab="1" data-toggle="tab">Data_1</a></li>
        <li class=""><a href="#tab2" class="tab2" data-tab="2" data-toggle="tab">Data_2</a></li>
        <li class=""><a href="#tab3" class="tab3" data-tab="3" data-toggle="tab">Data_3</a></li>

        <li class=""><a href="#tab4" class="tab4" data-tab="4" data-toggle="tab">Tremor_1</a></li>
        <li class=""><a href="#tab5" class="tab5" data-tab="5" data-toggle="tab">Tremor_2</a></li>
        <li class=""><a href="#tab6" class="tab6" data-tab="6" data-toggle="tab">Tremor_3</a></li>

        <li class=""><a href="#tab7" class="tab7" data-tab="7" data-toggle="tab">Tremor_Negentropic</a></li>
    </ul>

    <div class="tab-content ">
        <div class="tab-pane" id="tab1" style="display: none"></div>
        <div class="tab-pane" id="tab2" style="display: none"></div>
        <div class="tab-pane" id="tab3" style="display: none"></div>

        <div class="tab-pane" id="tab4" style="display: none"></div>
        <div class="tab-pane" id="tab5" style="display: none"></div>
        <div class="tab-pane" id="tab6" style="display: none"></div>

        <div class="tab-pane" id="tab7" style="display: none"></div>
    </div>

    <div class="snippets" style="display: none">
        <div class="data-snippet">
            <table class="table table1">
                <thead>
                <tr>
                    <th>_</th>
                    <th>time</th>
                    <th>iPad</th>
                    <th>outMic0ed</th>
                    <th>outMicFiltered</th>
                    <th>outMicNrmalz</th>
                    <th>outMicM50</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>count</td>
                    <td>_</td>
                    <td class="count forIPad"></td>
                    <td class="count forMic0ed"></td>
                    <td class="count forMicFilt"></td>
                    <td class="count forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>median</td>
                    <td>_</td>
                    <td class="median forIPad"></td>
                    <td class="median forMic0ed"></td>
                    <td class="median forMicFilt"></td>
                    <td class="median forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>3 quartile</td>
                    <td>_</td>
                    <td class="threequartile forIPad"></td>
                    <td class="threequartile forMic0ed"></td>
                    <td class="threequartile forMicFilt"></td>
                    <td class="threequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>1 quartile</td>
                    <td>_</td>
                    <td class="onequartile forIPad"></td>
                    <td class="onequartile forMic0ed"></td>
                    <td class="onequartile forMicFilt"></td>
                    <td class="onequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>_</td>
                    <td class="average forIPad"></td>
                    <td class="average forMic0ed"></td>
                    <td class="average forMicFilt"></td>
                    <td class="average forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Maximum</td>
                    <td>_</td>
                    <td class="maximum forIPad"></td>
                    <td class="maximum forMic0ed"></td>
                    <td class="maximum forMicFilt"></td>
                    <td class="maximum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Minimum</td>
                    <td>_</td>
                    <td class="minimum forIPad"></td>
                    <td class="minimum forMic0ed"></td>
                    <td class="minimum forMicFilt"></td>
                    <td class="minimum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                </tbody>
            </table>
            <table class="table table2">
                <caption>DATA 1</caption>
                <thead>
                <tr>
                    <th>row</th>
                    <th>time</th>
                    <th>iPad</th>
                    <th>outMic0ed</th>
                    <th>outMicFiltered</th>
                    <th>outMicNrmalz</th>
                    <th>outMicM50</th>
                </tr>
                </thead>
            </table>
        </div>
        <div class="tremor-snippet">
            <table class="table table1">

                <th>maxConstAbs</th>
                <th>maxConstAbs_NO</th>
                <th>maxFreqMag</th>
                <th>maxFreqMag_NO</th>
                <th>averageConstAbs</th>
                <th>averageConstAbs_NO</th>
                <th>averageFreqMag</th>
                <th>averageFreqMag_NO</th>
                <th>averageD23_635</th>
                <th>stanDotClone</th>
                <tr class="tremData">

                </tr>
                <th>divisionAverageValues</br>FftMag_23_404_405_635</th>
                <th>divisionAverageValues</br>FftMag_23_329_329_635</th>
                <th>quartileFftMag_23_635</th>
                <th>divisionQuartOnMaxFftMag</th>
                <th>division_q3_average</th>
                <th>maxFreqMagDiff</th>
                <th>maxFreqMagDiff_NO</th>
                <tr class="tremDataNext">

                </tr>
                <th>sideralDay</th>
                <th>liberating</th>
                <th>breakemo</th>
                <th>reprLove</th>
                <th>connect</th>
                <th>intuition</th>
                <th>spirorder</th>
                <th>mixSolft</th>
                <tr class="tremDataNextNew"></tr>

                <th>powerOctaves</th>
                <th>avgPowerOctaves</th>
                <th>maxFftMagNormalized</th>
                <th>totalMusicRaw</th>
                <th>totalMusicRawStDev</th>
                <th>totalMusicSmth</th>
                <th>totalMusicSmthStDev</th>
                <th>totalMusicRaw_Smth</th>

                <tr class="tremDataNextNewNext"></tr>
                <th>sumSmoothedStDev</th>
                <th>sumNormalizedAvg</th>
                <th>sumSmthNormedAvg</th>
                <tr class="tremNextRow"></tr>

            </table>
            <table class="table table2">
                <caption>Tremor 1</caption>
                <thead>
                    <tr>
                        <th>Row</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="negentropic-snippet">
            <table class="table negentropic0 table-bordered">
                <thead>
                    <tr>
                        <th>adress</th>
                        <th>value</th>
                    </tr>
                </thead>
            </table>

            <table class="table negentropic1 table-bordered">
                <thead>
                    <tr>
                        <th>adress</th>
                        <th>value</th>
                    </tr>
                </thead>
            </table>
            <table class="table negentropic2 table-bordered">
                <thead>
                    <tr>
                        <th>adress</th>
                        <th>value</th>
                    </tr>
                </thead>
            </table>
            <table class="table negentropic3 table-bordered">
                <thead>
                    <tr>
                        <th>adress</th>
                        <th>value</th>
                    </tr>
                </thead>
            </table>

            <table class="table negentropic4 table-bordered">
                <thead>
                    <tr>
                        <th>adress</th>
                        <th>value</th>
                    </tr>
                </thead>
            </table>
            <table class="table negentropic5 table-bordered">
                <thead>
                    <tr>
                        <th>adress</th>
                        <th>value</th>
                    </tr>
                </thead>
            </table>
            <table class="table negentropic6 table-bordered">
                <thead>
                    <tr>
                        <th>adress</th>
                        <th>value</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

<script type="text/javascript" src="https://cdn.datatables.net/v/bs-3.3.7/jqc-1.12.3/dt-1.10.16/fc-3.2.4/fh-3.1.3/datatables.min.js"></script>
<script>
    $(document).ready(function() {

        $('.tab1[data-toggle="tab"], .tab2[data-toggle="tab"], .tab3[data-toggle="tab"]').on('shown.bs.tab', function (e) {

            var tab = $(e.target).data('tab');

            $('.tab-pane').html('').css('display', 'none');
            $('#tab' + tab).html($('.data-snippet').html());

            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {

                var user = JSON.parse(data);
                var sheet_data;

                if(tab === 1) {
                    sheet_data = user.sheet_data_1;
                } else if(tab === 2) {
                    sheet_data = user.sheet_data_2;
                } else {
                    sheet_data = user.sheet_data_3;
                }

                var i, j;

                for (i = 0, j = 1; i < sheet_data.arrElements.length; i++, j++) {
                    $('body #tab' + tab + ' .table2').append("<tr><td>" + j + "</td><td>" + sheet_data.arrElements[i].time + "</td><td>" + sheet_data.arrElements[i].iPad + "</td><td>" + sheet_data.arrElements[i].outMic0ed + "</td><td>" + sheet_data.arrElements[i].outMicFiltered + "</td><td>" + sheet_data.arrElements[i].outMicNrmalz + "</td><td>" + sheet_data.arrElements[i].outMicM50 + "</td></tr>");
                }

                $('body #tab' + tab + ' .table1 .count.forIPad').append(sheet_data.quartileForIPad.num);
                $('body #tab' + tab + ' .table1 .median.forIPad').append(sheet_data.quartileForIPad.median);
                $('body #tab' + tab + ' .table1 .threequartile.forIPad').append(sheet_data.quartileForIPad.q3);
                $('body #tab' + tab + ' .table1 .onequartile.forIPad').append(sheet_data.quartileForIPad.q1);
                $('body #tab' + tab + ' .table1 .average.forIPad').append(sheet_data.quartileForIPad.avg);
                $('body #tab' + tab + ' .table1 .maximum.forIPad').append(sheet_data.quartileForIPad.max);
                $('body #tab' + tab + ' .table1 .minimum.forIPad').append(sheet_data.quartileForIPad.min);

                $('body #tab' + tab + ' .table1 .count.forMic0ed').append(sheet_data.quartileForOutMic0ed.num);
                $('body #tab' + tab + ' .table1 .median.forMic0ed').append(sheet_data.quartileForOutMic0ed.median);
                $('body #tab' + tab + ' .table1 .threequartile.forMic0ed').append(sheet_data.quartileForOutMic0ed.q3);
                $('body #tab' + tab + ' .table1 .onequartile.forMic0ed').append(sheet_data.quartileForOutMic0ed.q1);
                $('body #tab' + tab + ' .table1 .average.forMic0ed').append(sheet_data.quartileForOutMic0ed.avg);
                $('body #tab' + tab + ' .table1 .maximum.forMic0ed').append(sheet_data.quartileForOutMic0ed.max);
                $('body #tab' + tab + ' .table1 .minimum.forMic0ed').append(sheet_data.quartileForOutMic0ed.min);

                $('body #tab' + tab + ' .table1 .count.forMicFilt').append(sheet_data.quartileForOutMicFilt.num);
                $('body #tab' + tab + ' .table1 .median.forMicFilt').append(sheet_data.quartileForOutMicFilt.median);
                $('body #tab' + tab + ' .table1 .threequartile.forMicFilt').append(sheet_data.quartileForOutMicFilt.q3);
                $('body #tab' + tab + ' .table1 .onequartile.forMicFilt').append(sheet_data.quartileForOutMicFilt.q1);
                $('body #tab' + tab + ' .table1 .average.forMicFilt').append(sheet_data.quartileForOutMicFilt.avg);
                $('body #tab' + tab + ' .table1 .maximum.forMicFilt').append(sheet_data.quartileForOutMicFilt.max);
                $('body #tab' + tab + ' .table1 .minimum.forMicFilt').append(sheet_data.quartileForOutMicFilt.min);

                $('body #tab' + tab + ' .table1 .count.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.num);
                $('body #tab' + tab + ' .table1 .median.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.median);
                $('body #tab' + tab + ' .table1 .threequartile.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.q3);
                $('body #tab' + tab + ' .table1 .onequartile.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.q1);
                $('body #tab' + tab + ' .table1 .average.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.avg);
                $('body #tab' + tab + ' .table1 .maximum.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.max);
                $('body #tab' + tab + ' .table1 .minimum.forMicNrmalz').append(sheet_data.quartileForOutMicNrmalz.min);

                $('body #tab' + tab + '').show();
                $('body #tab' + tab + ' .table2 caption').text('DATA ' + tab);
                $('body #tab' + tab + ' .table1, #tab' + tab + ' .table2').DataTable({
                    fixedHeader: true,
                    "searching": false,
                    pageLength: 50
                });

            });
        });

        $('.tab4[data-toggle="tab"], .tab5[data-toggle="tab"], .tab6[data-toggle="tab"]').on('shown.bs.tab', function (e) {

            var tab = $(e.target).data('tab');

            $('.tab-pane').html('').css('display', 'none');
            $('#tab' + tab).html($('.tremor-snippet').html());

            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {

                var user = JSON.parse(data);
                var sheet_tremor;

                if(tab === 4) {
                    sheet_tremor = user.sheet_tremorSpectrum_1;
                } else if(tab === 5) {
                    sheet_tremor = user.sheet_tremorSpectrum_2;
                } else {
                    sheet_tremor = user.sheet_tremorSpectrum_3;
                }

                var i, j;

                for (i = 0, j = 1; i < user.headers_sheet_tremorSpectrum.length; i++, j++) {
                    $('body #tab' + tab + ' .table2 thead tr').append("<th>" + user.headers_sheet_tremorSpectrum[i].nameCol + "</th>");
                }

                var tremor_rows_count = sheet_tremor.arrFftFreq.length;

                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody').append("<tr data-count=" + i + "><td>" + j + "</td><td>" + sheet_tremor.arrFftFreq[i] + "</td></tr>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFftMag[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFftComplex[i][0] + "</br>" + sheet_tremor.arrFftComplex[i][1] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrConstABS[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMag[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrConstABS_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMag_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrConstAbsNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrConstAbsNormal_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagNormal_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagDiff[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagDiff_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagDiffNormal[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFreqMagDiffNormal_NO[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFftMagNormalized[i] + "</td>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    if(sheet_tremor.lowerAndHigherFreq_1[i] !== undefined) {
                        $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>freq=" + sheet_tremor.lowerAndHigherFreq_1[i].freq + "</br>power=" + sheet_tremor.lowerAndHigherFreq_1[i].power + "</td>");
                    } else {
                        $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>_</td>");
                    }
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.colSumRaw.arr[i] + "</td></tr>");
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    if(sheet_tremor.lowerAndHigherFreq_2[i] !== undefined) {
                        $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>freq=" + sheet_tremor.lowerAndHigherFreq_2[i].freq + "</br>power=" + sheet_tremor.lowerAndHigherFreq_2[i].mag + "</td>");
                    } else {
                        $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>_</td>");
                    }
                }
                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.colSumNormalized.arr[i] + "</td>");
                }
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + tremor_rows_count + ']').append("<td>" + sheet_tremor.colSumNormalized.avgNotesMusic + "</td>");
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + +tremor_rows_count + 1 + ']').append("<td>" + sheet_tremor.colSumNormalized.stDevNotesMusic + "</td>");

                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFftMagRawSmoothed[i] + "</td>");
                }

                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrFftMagNormalizedSmoothed[i] + "</td>");
                }
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + tremor_rows_count + ']').append("<td>" + sheet_tremor.colSumRaw.avgNotesMusic + "</td>");
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + +tremor_rows_count + 1 + ']').append("<td>" + sheet_tremor.colSumRaw.stDevNotesMusic + "</td>");

                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.colSumSmoothed.arr[i] + "</td>");
                }
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + tremor_rows_count + ']').append("<td>" + sheet_tremor.colSumSmoothed.avgNotesMusic + "</td>");
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + +tremor_rows_count + 1 + ']').append("<td>" + sheet_tremor.colSumSmoothed.stDevNotesMusic + "</td>");

                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.colSumSmthNormed.arr[i] + "</td>");
                }

                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + tremor_rows_count + ']').append("<td>" + sheet_tremor.colSumSmthNormed.avgNotesMusic + "</td>");
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + +tremor_rows_count + 1 + ']').append("<td>" + sheet_tremor.colSumSmthNormed.stDevNotesMusic + "</td>");

                for (i = 0, j = 1; i < tremor_rows_count; i++, j++) {
                    $('body #tab' + tab + ' .table2 tbody tr[data-count=' + i + ']').append("<td>" + sheet_tremor.arrSumSmthNorm_1.arrResult[i] + "</td>");
                }

                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + tremor_rows_count + ']').append("<td>" + sheet_tremor.arrSumSmthNorm_1.avgNotesMusic + "</td>");
                $('body #tab' + tab + ' .table2 tbody tr[data-count=' + +tremor_rows_count + 1 + ']').append("<td>" + sheet_tremor.arrSumSmthNorm_1.stDevNotesMusic + "</td>");

                $('body #tab' + tab + ' .table1 tr.tremData').append('<td>' + sheet_tremor.maxConstAbs + '</td><td>' + sheet_tremor.maxConstAbs_NO + '</td><td>' + sheet_tremor.maxFreqMag + '</td><td>' + sheet_tremor.maxFreqMag_NO + '</td><td>' + sheet_tremor.averageConstAbs + '</td><td>' + sheet_tremor.averageConstAbs_NO + '</td><td>' + sheet_tremor.averageFreqMag + '</td><td>' + sheet_tremor.averageFreqMag_NO + '</td><td>' + sheet_tremor.averageD23_635 + '</td><td>' + sheet_tremor.stanDotClone + '</td>');

                $('body #tab' + tab + ' .table1 tr.tremDataNext').append("<td>" + sheet_tremor.divisionaverageValuesFftMag_23_404_405_635 + "</td><td>" + sheet_tremor.divisionaverageValuesFftMag_23_329_329_635 + "</td><td>q3=" + sheet_tremor.quartileFftMag_23_635.q3 + "</br>max=" + sheet_tremor.quartileFftMag_23_635.max + "</td><td>" + sheet_tremor.divisionQuartOnMaxFftMag + "</td><td>" + sheet_tremor.division_q3_average + "</td>");

                $('body #tab' + tab + ' .table1 tr.tremDataNext').append('<td>' + sheet_tremor.maxFreqMagDiff + '</td><td>' + sheet_tremor.maxFreqMagDiff_NO + '</td>');

                $('body #tab' + tab + ' .table1 tr.tremDataNextNew').append('<td>' + sheet_tremor.objSolfg.sideralDay + '</td><td>' + sheet_tremor.objSolfg.liberating + '</td><td>' + sheet_tremor.objSolfg.breakemo + '</td><td>' + sheet_tremor.objSolfg.reprLove + '</td><td>' + sheet_tremor.objSolfg.connect + '</td><td>' + sheet_tremor.objSolfg.intuition + '</td><td>' + sheet_tremor.objSolfg.spirorder + '</td><td>' + sheet_tremor.objSolfg.mixSolft + '</td>');

                $('body #tab' + tab + ' .table1 tr.tremDataNextNewNext').append('<td>' + sheet_tremor.powerOctaves + '</td><td>' + sheet_tremor.avgPowerOctaves + '</td><td>' + sheet_tremor.maxFftMagNormalized + '</td>');

                $('body #tab' + tab + ' .table1 tr.tremDataNextNewNext').append('<td>' + sheet_tremor.totalMusicRaw + '</td><td>' + sheet_tremor.totalMusicRawStDev + '</td><td>' + sheet_tremor.totalMusicSmth + '</td><td>' + sheet_tremor.totalMusicSmthStDev + '</td><td>' + sheet_tremor.totalMusicRaw_Smth + '</td>');

                $('body #tab' + tab + ' .table1 tr.tremNextRow').append('<td>' + sheet_tremor.sumSmoothedStDev + '</td><td>' + sheet_tremor.sumNormalizedAvg + '</td><td>' + sheet_tremor.sumSmthNormedAvg + '</td>');

                $('body #tab' + tab + ' .table1 tr.tremNextRow').append('<td>' + sheet_tremor.colSumSmthNorm_1Avg + '</td>');


                $('body #tab' + tab + '').show();
                $('body #tab' + tab + ' .table2 caption').text('Tremor ' + (tab - 3));
                $('body #tab' + tab + ' .table2').DataTable({
                    fixedHeader: true,
                    "searching": false,
                    "scrollX": true,
                    pageLength: 50
                });
            });
        });

        $('.tab7[data-toggle="tab"]').on('shown.bs.tab', function (e) {

            var tab = $(e.target).data('tab');

            $('.tab-pane').html('').css('display', 'none');
            $('#tab' + tab).html($('.negentropic-snippet').html());

            $.post("http://switchmymind.chdev.com.ua/curl.php", function (data) {

                var user = JSON.parse(data);
                var tremorNegen = user.sheet_tremorNegentropicAlgorithm;
                var i, j, k;


                for (k = 0; k < 6; k++) {

                    $('body #tab' + tab + ' .negentropic' + k).append("<caption>Table_" + tremorNegen[k].tableName + "</caption>");
                    for (j = 0; j < tremorNegen[k].cells.length; j++) {
                        for (i = 0; i < tremorNegen[k].cells[j].length; i++) {
                            $('body #tab' + tab + ' .negentropic' + k).append("<tr><td>" + tremorNegen[k].cells[j][i].title + "</td><td></td></tr><tr><td>" + tremorNegen[k].cells[j][i].line9.address + "</td><td>" + tremorNegen[k].cells[j][i].line9.value + "</td></tr><tr><td>" + tremorNegen[k].cells[j][i].line10.address + "</td><td>" + tremorNegen[k].cells[j][i].line10.value + "</td></tr>");
                        }
                    }

                }


                $('body #tab' + tab + ' .negentropic5').append("<caption>Table_" + tremorNegen[5].tableName + "</caption>");
                for (j = 0; j < tremorNegen[5].cells.length; j++) {
                    for (i = 0; i < tremorNegen[5].cells[j].length; i++) {
                        $('body #tab' + tab + ' .negentropic6').append("<tr><td>" + tremorNegen[5].cells[j][i].title + "</td><td></td></tr><tr><td>" + tremorNegen[5].cells[j][i].line9.address + "</td><td>" + tremorNegen[5].cells[j][i].line9.value + "</td></tr><tr><td>" + tremorNegen[5].cells[j][i].line10.address + "</td><td>" + tremorNegen[5].cells[j][i].line10.value + "</td></tr>");

                    }
                }


                $('body #tab' + tab + ' .negentropic6').append("<caption>Table_" + tremorNegen[6].tableName + "</caption>");
                for (j = 0; j < tremorNegen[6].cells.length; j++) {
                    for (i = 0; i < tremorNegen[6].cells[j].length; i++) {
                        $('body #tab' + tab + ' .negentropic6').append("<tr><td>" + tremorNegen[6].cells[j][i].title + "</td><td></td></tr><tr><td>" + tremorNegen[6].cells[j][i].line9.address + "</td><td>" + tremorNegen[6].cells[j][i].line9.value + "</td></tr><tr><td>" + tremorNegen[6].cells[j][i].line10.address + "</td><td>" + tremorNegen[6].cells[j][i].line10.value + "</td></tr>");

                    }
                }

                $('body #tab' + tab + '').show();
                $('body #tab' + tab + ' .table').DataTable({
                    fixedHeader: true,
                    "searching": false,
                    pageLength: 10
                });
            });

        });



    } );
</script>

<?php get_footer(); ?>