<?php
/*
Template Name: Table template page
*/
?>
<?php get_header(); ?>


    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.16/css/dataTables.bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.5.1/css/buttons.bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/fixedheader/3.1.3/css/fixedHeader.bootstrap.min.css"/>

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

            <a href="#" download="data.txt" class="btn btn-default download-data-btn">Download</a>

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
                <!--                <th>sumSmoothedStDev</th>-->
                <!--                <th>sumNormalizedAvg</th>-->
                <!--                <th>sumSmthNormedAvg</th>-->
                <!--                <th>avgNotesMusic</th>-->
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
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>

            <table class="table negentropic1 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
            <table class="table negentropic2 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
            <table class="table negentropic3 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>

            <table class="table negentropic4 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
            <table class="table negentropic5 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
            <table class="table negentropic6 table-bordered">
                <thead>
                <tr>
                    <th>title</th>
                    <th>line9</th>
                    <th>line10</th>
                </tr>
                </thead>
            </table>
        </div>
    </div>

    <script
            src="http://code.jquery.com/jquery-1.12.4.min.js"
            integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <script type="text/javascript" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.flash.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/fixedheader/3.1.3/js/dataTables.fixedHeader.min.js"></script>


    <script src="<?php echo get_template_directory_uri() ?>/js/config.js"></script>
    <script src="<?php echo get_template_directory_uri() ?>/js/main.js"></script>

<?php get_footer(); ?>